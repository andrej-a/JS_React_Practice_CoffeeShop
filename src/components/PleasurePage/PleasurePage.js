import "./PleasurePage.scss";
import Header from "../Header/Header";
import PageDescription from "../PageDescription/PageDescription";
import CoffeItemsBox from "../CoffeeItemsBox/CoffeItemsBox";
import image from "../../resources/pleasureIMG.png";
const PleasurePage = () => {
    return(
        <div className="pleasure">
            <Header 
            classes={"header-pleasure"}
            title={"For your pleasure"}
            />
            <PageDescription 
            image={image} 
            title={"About our goods"}
            />
            <CoffeItemsBox />
        </div>
    )
}

export default PleasurePage;