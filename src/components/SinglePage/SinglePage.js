import "./SinglePage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";
import cardItem from "../../resources/cards__image/sinplePageCard.png";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
const SinglePage = () => {
    const { itemID } = useParams();
    const [id, setID] = useState(null);

    useEffect(() => {
        onSetState(itemID);
    }, [itemID]);

    const onSetState = (value) => {
        setID(value);
    };

    const createCard = (id) => {
        if (!id) {
            return
        } else {
               const card = data.map(item => {
                if (+item.id === +itemID) {
                    return (
                        <div key={item.id} className="cardItem">
                            <div className="cardItem__image">
                                <img src={cardItem} alt="" />
                            </div>
                            <div className="cardItem__info">
                                <div className="cardItem__info__about"><p className="text">About it</p></div>
                                <div className="cardItem__info__logo">
                                    <Logo paddingTop={0} borderColorDark={"#000"} class={"main__logo__groupDark"}/>
                                </div>
                                <div className="cardItem__info__country"><p className="text"><span>Country:</span> {item.country} </p></div>
                                <div className="cardItem__info__description">
                                    <p className="text"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="cardItem__info__price"><p className="text">Price: <span>{item.price}$</span></p></div>
                            </div>
                        </div>
                    )
                }
            })

            return card;
        }
    }

    const item = id ? createCard(id) : null;

    return(
        <div className="singlePage">
            <Header 
            classes={"header"}
            title={"Our Coffee"}
            />
            <div className="singlePage__cardField">
                <div className="cardItem">
                  {item}
                </div>
            </div>
        </div>
    )
}

export default SinglePage;