import React, {Component} from 'react';

class PageThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {img: "./img/resim1.png"},
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

    slide = (n) => {
        this.slideIndex = this.slideIndex === 0 && n < 0 ? this.state.images.length - 1 : (this.slideIndex + n) % this.state.images.length;
        this.forceUpdate();
    };


    componentDidUpdate() {
        this.refs.animate.classList.toggle("animation");
    }

    render() {
        return (
            <div className="wrapper2">
                <div className="sliderRoot">
                    {this.state.images.map((item, key) => (
                        this.slideIndex === key &&
                        <div className="sliderBlock" key={key} >
                            <div className="textBlock">
                                <h1 ref="animate">Lorem ipsum. {key}</h1>
                                <h3>Lorem ipsum dolor sit.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis
                                    consequatur corporis eaque earum hic illum minus molestiae pariatur provident?</p>
                            </div>
                            <div key={key} className="imgBlock">
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
        );
    }
}

export default PageThree;

