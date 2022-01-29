import "./BurgerMenu.scss";
const BurgerMenu = (props) => {
    return(
        <div className="hamburger-menu">
            <input checked={props.check} onChange={props.onSetCheck} id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
        </div>
    );
};

export default BurgerMenu;