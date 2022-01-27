import {Link} from "react-router-dom";
import "./Menu.scss";

const Menu = (props) => {
    return(
        <div className={props.class}>
            <div className={props.logo}></div>
            <div className={props.class + "__homePage"}> <Link to="/"> Coffee house </Link> </div>
            <div className={props.class + "__ourCoffePage"}> <Link to="/ourcoffee"> Our coffee </Link> </div>
            <div className={props.class + "__forYouPage"}> <Link to="/pleasure"> For your pleasure </Link></div>
        </div>
    )
}

export default Menu;