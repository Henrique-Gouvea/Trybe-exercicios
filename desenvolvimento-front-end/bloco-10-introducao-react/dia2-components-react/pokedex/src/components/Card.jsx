import { Component } from "react";
import "./card.css"

class Card extends Component {
    render() {
        const { pokeInfo } = this.props;
        console.log(pokeInfo);
        return <div id={pokeInfo.name} className={`${pokeInfo.type} card`}>
            <h1>{pokeInfo.name} </h1>
            <img src={pokeInfo.image} alt={pokeInfo.name} />
            <div className="info">
                <p><strong>Type:</strong> {pokeInfo.type}</p>
                <p><strong>Weigth:</strong> {pokeInfo.averageWeight.value}{pokeInfo.averageWeight.measurementUnit}</p>
                <a href={pokeInfo.moreInfo} target="_blank">More Info</a>
            </div>
        </div>
    }
}

export default Card;