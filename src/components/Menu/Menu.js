import {Link} from "react-router-dom";
import "./Menu.scss";

const Menu = (props) => {
    return(
        <div className={props.class}>
            <div className={props.logo}></div>
            <div className="menu__homePage"> <Link to="/"> Coffee house </Link> </div>
            <div className="menu__ourCoffePage"> <Link to="/ourcoffee"> Our coffee </Link> </div>
            <div className="menu__forYouPage"> <Link to="/pleasure"> For your pleasure </Link></div>
        </div>
    )
}

export default Menu;