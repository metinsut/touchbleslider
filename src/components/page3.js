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

    changeImage = () => {
        console.log("test")
    }

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
                <div className="sliderRoot">
                    <div className="sliderBlock">
                        {this.state.images.map((item, key) => (
                            <div key={key} className="imgBlock">
                                <img src={item.img} alt=""/>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default PageThree;

