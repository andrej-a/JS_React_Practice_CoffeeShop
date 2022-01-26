import "./OurBest.scss";
import firstCard from "../../../resources/cards__image/1.png";

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../../data/data";
import _doShortName from "../../../service/service"

const OurBest = (props) => {
const [state, setState] = useState([]);
const [show, setShow] = useState(false);
    useEffect(() => {
        onState(data);
    }, [data]);

    const onState = (array) => {
        try{
            const bestItems = array.filter(item => item["best"]);
            _doShortName(bestItems); 
            setState(bestItems);
            setShow(true);
        } catch(e){
            console.log( `Error: ${e.name}: ${e.message}`);
        }
    };

    return(
        <div className="best">
            <div className="best__title subheader_text">
                <p>Our best</p>
            </div>

            <div className="best__list">
                <SetCards show={show} array={state}/>
            </div>
        </div> /* \best */
    )
};

const SetCards = (props) => {
    const time = 1000;
    const items = props.array.map(item => {
        return(
            <CSSTransition
            timeout={time}
            classNames="cards"
            in={props.show}
            key={item.id}
            >
                <Link className="cards" to={`/ourcoffee/${item.id}`}>
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
            </CSSTransition>
        )
    });

    return(
        <ul className="best__list__items">
            <TransitionGroup component={null}>
                {items}      
            </TransitionGroup> 
        </ul>
    )
};

export default OurBest;