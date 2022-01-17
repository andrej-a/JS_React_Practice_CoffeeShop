import "./Footer.scss";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu"; 
const Footer = (props) => {
    return(
        <div className="footer">
            <Menu class={"menu"} logo={"menu__logo"}/>
            <Logo paddingTop={30} borderColorDark={"#000"} class={"main__logo__groupDark"}/>
        </div>
    );
};

export default Footer;