import "./CoffeeItemsBox.scss";
import image from "../../resources/ourCoffeeCards.png";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";
import _doShortName from "../../service/service";

const CoffeItemsBox = (props) => {
    const [state, setData] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        onSetData(props.data);
    }, [props.data]);


    const onSetData = (array) => {
        _doShortName(array);
        setData(array);
        setShow(true);
    };

    return(
         <>
            <PrintItems show={show} array={state}/>
         </>
    )
}

const PrintItems = (props) => {
    const timeout = 1000;
    const items = props.array.map(item => {
        return(

            <CSSTransition
            timeout={timeout}
            classNames="cards"
            in={props.show}
            key={item.id}
            >
                <Link className="cards" to={`/ourcoffee/${item.id}`}>
                    <div className="coffee_items_item">
                        <div className="coffee_items_item_image">
                            <img src={image} alt="" />
                        </div>
                        <div className="coffee_items_item_title text"> {item.name} {item.weight} kg </div>
                        <div className="coffee_items_item_country text"> {item.country} </div>
                        <div className="coffee_items_item_price text"> {item.price}$ </div>
                    </div>
                </Link>
            </CSSTransition>
        )
    });

    return(
        <div className="coffee_items">
            <TransitionGroup component={null}>
                {items}
            </TransitionGroup>
        </div>
    )
};

export default CoffeItemsBox;