import "./OurBest.scss";
import firstCard from "../../../resources/cards__image/1.png";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../../data/data";
import _doShortName from "../../../service/service"
const OurBest = (props) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        onState(data);
    }, [data]);

    const onState = (array) => {
        const bestItems = array.filter(item => item["best"]);
        _doShortName(bestItems); 
        setState(bestItems);
    };

    const onSetCards = (array) => {
        const items = array.map(item => {
            return(
                     <Link key={item.id} to={`/ourcoffee/${item.id}`}>
                        <li className="best__list__items__item">
                            <img src={firstCard} alt="first" />
                            <div className="title">
                                <p className="text">{item.name} {item.weight} kg</p>
                            </div>
                            <div className="cost">
                                <p>{item.price}$</p>
                            </div>
                        </li>
                     </Link>
            )
        });

        return(
            <ul className="best__list__items">
                  {items} 
            </ul>
        )
    };

    const content = state ? onSetCards(state) : null;
    return(
        <div className="best">
            <div className="best__title subheader_text">
                <p>Our best</p>
            </div>

            <div className="best__list">
                {content}
            </div>
        </div> /* \best */
    )
};

export default OurBest;