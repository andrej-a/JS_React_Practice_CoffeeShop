import "./SinglePage.scss";
import cardItem from "../../resources/cards__image/sinplePageCard.png";
import Logo from "../Logo/Logo";
const SinglePage = (props) => {
    return(
        <div className="singlePage">
            <div className="singlePage__header">
                <div className="singlePage__header_title">
                    <p>Our Coffee</p>
                </div>
            </div>

            <div className="singlePage__cardField">
                <div className="cardItem">
                    <div className="cardItem__image">
                        <img src={cardItem} alt="" />
                    </div>
                    <div className="cardItem__info">
                        <div className="cardItem__info__about"><p>About it</p></div>
                        <div className="cardItem__info__logo">
                            <Logo paddingTop={0} borderColorDark={"#000"} class={"main__logo__groupDark"}/>
                        </div>
                        <div className="cardItem__info__country"><p><span>Country:</span> Brasil</p></div>
                        <div className="cardItem__info__description">
                            <p><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="cardItem__info__price"><p>Price: <span>16.99$</span></p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;