import "./OurBest.scss";
import firstCard from "../../resources/cards__image/1.png"
import secondCard from "../../resources/cards__image/2.png"
import thirdCard from "../../resources/cards__image/3.png"
const OurBest = (props) => {
    return(
        <div className="best">
            <div className="best__title">
                <p>Our best</p>
            </div>

            <div className="best__list">
                <ul className="best__list__items">
                    <li className="best__list__items__item">
                        <img src={firstCard} alt="1" />
                        <div className="title">
                            <p>Solimo Coffee Beans 2 kg</p>
                        </div>
                        <div className="cost">
                            <p>10.73$</p>
                        </div>
                    </li>
                    <li className="best__list__items__item">
                        <img src={secondCard} alt="1" />
                        <div className="title">
                            <p>Presto Coffee Beans 1 kg</p>
                        </div>
                        <div className="cost">
                            <p>15.99$</p>
                        </div>
                    </li>
                    <li className="best__list__items__item">
                        <img src={thirdCard} alt="1" />
                        <div className="title">
                            <p>AROMISTICO Coffee 1 kg</p>
                        </div>
                        <div className="cost">
                            <p>6.99$</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default OurBest;