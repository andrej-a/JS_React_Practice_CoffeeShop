import "./CoffeeItemsBox.scss";
import image from "../../resources/ourCoffeeCards.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _doShortName from "../../service/service";

const CoffeItemsBox = (props) => {
    const [state, setData] = useState(null);

    useEffect(() => {
        onSetData(props.data);
    }, [props.data]);


    const onSetData = (array) => {
        _doShortName(array);
        setData(array);
    };

    const printItems = (array) => {
        const items = array.map(item => {
            return(
                <Link key={item.id} to={`/ourcoffee/${item.id}`}>
                    <div className="coffee_items_item">
                        <div className="coffee_items_item_image">
                            <img src={image} alt="" />
                        </div>
                        <div className="coffee_items_item_title text"> {item.name} {item.weight} kg </div>
                        <div className="coffee_items_item_country text"> {item.country} </div>
                        <div className="coffee_items_item_price text"> {item.price}$ </div>
                    </div>
                </Link>
            )
        });

        return(
            <div className="coffee_items">
                {items}
            </div>
        )
    };

    const content = state ? printItems(state) : null;

    return(
         <>
            {content}
         </>
    )
}

export default CoffeItemsBox;