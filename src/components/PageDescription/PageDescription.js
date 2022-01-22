import "./PageDescription.scss";
import Logo from "../Logo/Logo";

const PageDescription = (props) => {
    return(
        <>
            <div className="pageDescription">
                <div className="pageDescription__image">
                    <img src={props.image} alt="girl-and-coffee" />
                </div>
                <div className="pageDescription__text">
                    <div className="pageDescription__text__title">
                        <p className="subheader_text">{props.title}</p>
                    </div>
                    <div className="pageDescription__text__logo">
                        <Logo paddingTop={0} borderColorDark={"#000"} class={"main__logo__groupDark"}/>
                    </div>
                    <div className="pageDescription__text__descr">
                        <p>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        </p>
                        <p>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                        </p>
                        <p>
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. <br /> Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom_line"></div>
        </>
    )
}

export default PageDescription;