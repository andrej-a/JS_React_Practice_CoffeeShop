import "./CoffeeItemsBox.scss";
import image from "../../resources/ourCoffeeCards.png";

const CoffeItemsBox = (props) => {
    return(
        <div className="coffee_items">
            <div className="coffee_items_item">
                <div className="coffee_items_item_image">
                    <img src={image} alt="" />
                </div>
                <div className="coffee_items_item_title text"> AROMISTICO Coffee 1 kg </div>
                <div className="coffee_items_item_country text"> Brazil </div>
                <div className="coffee_items_item_price text"> 6.99$ </div>
            </div>
            <div className="coffee_items_item">
                <div className="coffee_items_item_image">
                    <img src={image} alt="" />
                </div>
                <div className="coffee_items_item_title text"> AROMISTICO Coffee 1 kg </div>
                <div className="coffee_items_item_country text"> Kenya </div>
                <div className="coffee_items_item_price text"> 6.99$ </div>
            </div>
            <div className="coffee_items_item">
                <div className="coffee_items_item_image">
                    <img src={image} alt="" />
                </div>
                <div className="coffee_items_item_title text"> AROMISTICO Coffee 1 kg </div>
                <div className="coffee_items_item_country text"> Columbia </div>
                <div className="coffee_items_item_price text"> 6.99$ </div>
            </div>
            <div className="coffee_items_item">
                <div className="coffee_items_item_image">
                    <img src={image} alt="" />
                </div>
                <div className="coffee_items_item_title text"> AROMISTICO Coffee 1 kg </div>
                <div className="coffee_items_item_country text"> Brazil </div>
                <div className="coffee_items_item_price text"> 6.99$ </div>
            </div>
            <div className="coffee_items_item">
                <div className="coffee_items_item_image">
                    <img src={image} alt="" />
                </div>
                <div className="coffee_items_item_title text"> AROMISTICO Coffee 1 kg </div>
                <div className="coffee_items_item_country text"> Brazil </div>
                <div className="coffee_items_item_price text"> 6.99$ </div>
            </div>
            <div className="coffee_items_item">
                <div className="coffee_items_item_image">
                    <img src={image} alt="" />
                </div>
                <div className="coffee_items_item_title text"> AROMISTICO Coffee 1 kg </div>
                <div className="coffee_items_item_country text"> Brazil </div>
                <div className="coffee_items_item_price text"> 6.99$ </div>
            </div>
        </div> 
    )
}

export default CoffeItemsBox;