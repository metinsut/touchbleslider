import React, {Component} from 'react';

class PageTwo extends Component {

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

    itemIndex = 0;
    leftPosition = 0;

    changeImage = (next) => {

        // let sagdaKalanbosluk = (this.refs.root.offsetWidth) - ((this.state.images.length * this.refs.card.offsetWidth) - (this.itemIndex * this.refs.card.offsetWidth));


        if ((this.itemIndex < this.state.images.length - 1) && (next === 1) && ((this.state.images.length-1)-this.itemIndex)>Math.floor(this.refs.wrapper.offsetWidth / this.refs.card.offsetWidth)) {
            this.leftPosition -= Math.floor(this.refs.wrapper.offsetWidth / this.refs.card.offsetWidth) * this.refs.card.offsetWidth;
            this.itemIndex += Math.floor(this.refs.wrapper.offsetWidth / this.refs.card.offsetWidth);
        }
        else if ((this.itemIndex > 0) && (next === -1)) {
            this.leftPosition += Math.floor(this.refs.wrapper.offsetWidth / this.refs.card.offsetWidth) * this.refs.card.offsetWidth;
            this.itemIndex -= Math.floor(this.refs.wrapper.offsetWidth / this.refs.card.offsetWidth);
        }
        this.forceUpdate();
    };


    componentDidMount() {
        // console.log(Math.floor(this.refs.wrapper.offsetWidth / this.refs.card.offsetWidth) * this.refs.card.offsetWidth);
        console.log(this.itemIndex)
    }

    componentDidUpdate() {
        // console.log(Math.floor(this.refs.wrapper.offsetWidth / this.refs.card.offsetWidth));
        console.log(this.itemIndex);
        console.log(this.state.images.length-1);
        console.log((this.state.images.length-1)-this.itemIndex);
    }


    render() {
        return (
            <div className="wrapper1" ref="wrapper">
                <div className="textBlock1">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className="sliderRoot1">
                    <div className="sliderBlock1" ref="slider" style={{left: this.leftPosition}}>
                        {this.state.images.map((item, key) => (
                            <div key={key} className="imgBlock1" ref="card">
                                <div className="img">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className="info">
                                    <h1>Lorem ipsum.</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum ex
                                        facilis
                                        ipsa magni
                                        provident quas repellat rerum sed voluptas!</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="buttons1">
                    <div onClick={() => {
                        this.changeImage(-1)
                    }} className="left">&#9664;</div>
                    <div onClick={() => {
                        this.changeImage(1)
                    }} className="right">&#9654;</div>
                </div>
            </div>
        );
    }
}

export default PageTwo;

