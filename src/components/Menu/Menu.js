import "./Menu.scss";

const Menu = (props) => {
    return(
        <div className={props.class}>
            <div className={props.logo}></div>
            <div className="menu__homePage"> <a href="#">Coffee house</a></div>
            <div className="menu__ourCoffePage"> <a href="#">Our coffee</a> </div>
            <div className="menu__forYouPage"> <a href="#">For your pleasure</a> </div>
        </div>
    )
}

export default Menu;