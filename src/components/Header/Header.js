import "./Header.scss";

const Header = (props) => {
    return(
        <div className={props.classes}>
            <div className="header__title">
                <p>Our Coffee</p>
            </div>
        </div>
    )
}

export default Header;