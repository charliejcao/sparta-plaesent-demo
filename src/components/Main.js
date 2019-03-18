import React from "react";

export class Main extends React.Component {

    renderImages = () => {
        const cards = [
            {
                imgUrl: require("../images/layer-14.png"),
                date: "FEBRUARY 10 2017",
                title: "Bureaux exquisite delightful carefully curated soft power."
            }, {
                imgUrl: require("../images/layer-20.png"),
                date: "JANUARY 21 2017",
                title: "Esse airport veniam ryokan soft power."
            }, {
                imgUrl: require("../images/layer-18.png"),
                date: "FEBRUARY 2 2017",
                title: "Sharp bureaux sleepy K-pop carefully curated."
            }, {
                imgUrl: require("../images/layer-21.png"),
                date: "JANUARY 18 2017",
                title: "K-pop extraordinary."
            }, {
                imgUrl: require("../images/layer-19.png"),
                date: "JANUARY 27 2017",
                title: "St Moritz uniforms Beams."
            }, {
                imgUrl: require("../images/layer-22.png"),
                date: "JANUARY 12 2017",
                title: "Artisanal iconic cutting-edge business class."
            }
        ];
        return cards.map((item, index) => (
            <div className="main-item" key={index}>
                <img src={item.imgUrl} alt="main" />
                <div className="date">{item.date}</div>
                <div className="title">{item.title}</div>
                <div className="presented">
                    Presented by <u>LOREM IPSUM</u>
                </div>
            </div>
        ));
    };

    render() {
        return (
            <main>
                <div>{this.renderImages()}</div>
            </main>
        );
    }
}