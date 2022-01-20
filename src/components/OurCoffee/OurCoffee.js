import "./OurCoffee.scss";
import Header from "../Header/Header";
import PageDescription from "../PageDescription/PageDescription";
import CoffeItemsBox from "../CoffeeItemsBox/CoffeItemsBox";
import image from "../../resources/OurCoffeIMG.png"

const OurCoffee = () => {
    return(
        <>
        <Header 
        classes={"header"}
        title={"Our Coffee"}
        />
        <div className="ourCoffee">
            <PageDescription
            image={image} 
            title={"About our beans"}
            />
            <div className="ourCoffee__activ">
                <div className="ourCoffee__activ_search">
                    <label className="text" htmlFor="">Looking for 
                        <input className="text" name="search" type="text" placeholder="start typing here..." />
                    </label>
                </div>
                <div className="ourCoffee__activ_filter">
                    <label className="text" htmlFor="">Or filter
                        <input className="text" type="button" value="Brazil" />
                        <input className="text" type="button" value="Kenya" />
                        <input className="text" type="button" value="Columbia" />
                    </label>
                </div>
            </div> {/* active */}
            <CoffeItemsBox />         
        </div>
        </>
    )
}

export default OurCoffee;