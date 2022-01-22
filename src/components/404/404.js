import "./404.scss";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
const Page404 = () => {
    return(
        <>
        <Header 
            classes={"header"}
            title={"Our Coffee"}
        />
        <div className="title">
            <div className="title__text">
                <p className="header_text">Page is not found. Come back <Link to="/">into main page.</Link></p>
            </div>
        </div>
        </>
    );
};

export default Page404;