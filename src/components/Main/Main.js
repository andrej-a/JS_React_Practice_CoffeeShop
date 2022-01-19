import "./Main.scss";
import Rectangle from "./Rectangle/Rectangle";
import OurBest from "./OurBest/OurBest";
import Logo from "../Logo/Logo";
const Main = (props) => {
    return(
        <div className="main">
            <div className="main__header">
                <div className="main__title">
                    Everything You Love About Coffee
                </div>
                <Logo borderColor={"#fff"} class={"main__logo__group"}/>
                <div className="main__subtitle">
                    We makes every day full of energy and taste
                </div>
                <div className="main__tryBeans">
                    Want to try our beans?
                </div>
                <button className="main__moreBtn"><span>More</span></button>
            </div>
            <Rectangle />
            <OurBest />
        </div>
    )
}

export default Main;