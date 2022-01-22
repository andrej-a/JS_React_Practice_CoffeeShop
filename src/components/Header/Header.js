import "./Header.scss";

const Header = (props) => {
    return(
        <div className={props.classes}>
            <div className="header__title">
                <p className="header_text">{props.title}</p>
            </div>
        </div>
    )
}

export default Header;