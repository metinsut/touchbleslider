import React, {Component} from 'react';
import Swipeable from 'react-swipeable';

class PageOne extends Component {

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

        if ((this.itemIndex < this.state.images.length - 1) && (next === 1)) {
            this.leftPosition -= this.refs.card.offsetWidth;
            this.itemIndex += next;
        }
        else if ((this.itemIndex > 0) && (next === -1)) {
            this.leftPosition += this.refs.card.offsetWidth;
            this.itemIndex += next;
        }
        this.forceUpdate();
    };


    render() {
        return (
            <div className="wrapper">
                <div className="textBlock">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eum ex facilis ipsa magni
                        provident quas repellat rerum sed voluptas!</p>
                    <div className="buttons">
                        <div onClick={() => {
                            this.changeImage(-1)
                        }} className="left">&#9664;</div>
                        <div onClick={() => {
                            this.changeImage(1)
                        }} className="right">&#9654;</div>
                    </div>
                </div>
                <div className="sliderRoot" ref="root">
                    <div className="sliderBlock">

                        <Swipeable
                            onSwipedRight={() => this.changeImage(-1)}
                            onSwipedLeft={() => this.changeImage(1)}
                        >

                            <div className="sliderAbsoluteBlock" ref="slider" style={{left: this.leftPosition}}>
                                {this.state.images.map((item, key) => (
                                    <div key={key} className="imgBlock" ref="card">
                                        <img src={item.img} alt=""/>
                                    </div>
                                ))
                                }
                            </div>
                        </Swipeable>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageOne;
