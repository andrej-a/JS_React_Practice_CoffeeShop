import {Link} from "react-router-dom";
import "./Menu.scss";
import "./BurgerMenu/BurgerMenu.scss";
const Menu = (props) => {
    return(
        <div className={props.check ? `${props.class} active` : props.class}>
            <div className={props.logo}></div>
            <div className={props.class + "__homePage"}> <Link onClick={props.onSetCheck} to="/"> Coffee house </Link> </div>
            <div className={props.class + "__ourCoffePage"}> <Link onClick={props.onSetCheck} to="/ourcoffee"> Our coffee </Link> </div>
            <div className={props.class + "__forYouPage"}> <Link onClick={props.onSetCheck} to="/pleasure"> For your pleasure </Link></div>
        </div>
    )
}

export default Menu;