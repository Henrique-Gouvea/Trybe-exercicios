import { Component } from "react";
import pokemons from "../data";
import Card from "./Card";

class List extends Component {
    render() {
        return <div className="cardDad">
                {pokemons.map((poke) => <Card key={poke.id} pokeInfo={poke}/>)}
            </div>
    }
}

export default List;