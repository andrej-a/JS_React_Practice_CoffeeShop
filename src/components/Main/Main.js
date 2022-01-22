import "./Main.scss";
import Rectangle from "./Rectangle/Rectangle";
import OurBest from "./OurBest/OurBest";
import Logo from "../Logo/Logo";
const Main = (props) => {
    
    const scrollToBottom = () => {
        window.window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    };

    return(
        <div className="main">
            <div className="main__header">
                <div className="main__title header_text">
                    Everything You Love About Coffee
                </div>
                <Logo borderColor={"#fff"} class={"main__logo__group"}/>
                <div className="main__subtitle subheader_text">
                    We makes every day full of energy and taste
                </div>
                <div className="main__tryBeans subheader_text">
                    Want to try our beans?
                </div>
                <button onClick={scrollToBottom} className="main__moreBtn"><span className="text">More</span></button>
            </div>
            <Rectangle />
            <OurBest />
        </div>
    )
}

export default Main;