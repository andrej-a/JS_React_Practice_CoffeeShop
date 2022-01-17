import "./Logo.scss";
const Logo = (props) => {
    
    return (
        <div style={{paddingTop: props.paddingTop}} className="main__logo">
            <div style={{border: `1px solid ${props.borderColor}`}} className="main__logo__group__before"></div>
            <div className={props.class}></div>
            <div style={{border: `1px solid ${props.borderColor}`}} className="main__logo__group__after"></div>
        </div>
    )
}

export default Logo;