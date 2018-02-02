import React, {Component} from 'react';

class PageThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {"img": "./img/resim1.png"},
                {"img": "./img/resim2.jpg"},
                {"img": "./img/resim3.jpg"},
                {"img": "./img/resim4.jpg"},
                {"img": "./img/resim5.jpg"},
                {"img": "./img/resim6.png"},
                {"img": "./img/resim7.jpg"},
                {"img": "./img/resim8.jpg"},
                {"img": "./img/resim9.jpg"},
                {"img": "./img/resim10.jpg"}
            ]
        };
    }

    slideIndex = 0;
    previousSlideIndex = 0;

    slide = (n) => {
        clearTimeout(this.timeOut1);
        clearTimeout(this.timeOut2);
        this.slideIndex = this.slideIndex === 0 && n < 0 ? this.state.images.length - 1 : (this.slideIndex + n) % this.state.images.length;

        if (n === 1) {
            if (this.slideIndex === 0) {
                this.previousSlideIndex = (this.state.images.length - 1);
            }
            else {
                this.previousSlideIndex = this.slideIndex - 1;
            }
        }
        else if (n === -1) {
            if(this.slideIndex === this.state.images.length-1) {
                this.previousSlideIndex = 0;
            }
            else {
                this.previousSlideIndex = this.slideIndex + 1;
            }
        }

        this.forceUpdate();


        console.log("slideIndex" + this.slideIndex);
        console.log("previousSlideIndex" + this.previousSlideIndex);
        console.log("item Lenght" + (this.state.images.length - 1));

    };

    componentDidUpdate(prewProps) {
        if (prewProps.slideIndex !== this.slideIndex) {
            this.timeOut1 = setTimeout(() => this.refs[this.previousSlideIndex].firstChild.classList.remove("goneText"), 2000);
            this.timeOut2 = setTimeout(() => this.refs[this.previousSlideIndex].lastChild.classList.remove("goneImage"), 2000);
        }
    }

    render() {
        return (
            <div className="wrapper3">
                <div className="sliderRoot">
                    <div className="sliderBlock">
                        {this.state.images.map((item, key) => (
                            <div ref={key} className="sliderAbsoluteBlock" key={key}>
                                <div
                                    className={"textBlock" + (this.slideIndex === key ? " activeText" : this.previousSlideIndex === key ? " goneText" : "")}>
                                    <h1>Lorem ipsum. {key}</h1>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis
                                        consequatur corporis eaque earum hic illum minus molestiae pariatur
                                        provident?</p>
                                </div>
                                <div
                                    className={"imgBlock" + (this.slideIndex === key ? " activeImage" : this.previousSlideIndex === key ? " goneImage" : "")}>
                                    <img src={item.img} alt=""/>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className="buttons">
                        <div onClick={() => {
                            this.slide(-1)
                        }} className="left">&#9664;</div>
                        <div onClick={() => {
                            this.slide(1)
                        }} className="right">&#9654;</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageThree;

