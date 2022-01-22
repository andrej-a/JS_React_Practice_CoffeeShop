import { useEffect, useState } from "react";
import data from "../../data/data";
import _doShortName from "../../service/service";

import "./OurCoffee.scss";
import Header from "../Header/Header";
import PageDescription from "../PageDescription/PageDescription";
import CoffeItemsBox from "../CoffeeItemsBox/CoffeItemsBox";
import image from "../../resources/OurCoffeIMG.png";

const OurCoffee = () => {
    const [state, setState] = useState(null);
    const [nameValue, setNameValue] = useState(" ");
    const [filterValue, setFilterValue] = useState("All");

    useEffect(() => {
        try{
            onSetData(data);
        }catch(e){
            console.log( `Error: ${e.name}: ${e.message}`);
        }
    }, [data]);

    useEffect(() => {
        filterByCountry(filterValue);
    }, [filterValue]);

    useEffect(() => {
        searchByName(nameValue);
    }, [nameValue]);


    const onSetData = (array) => {
        _doShortName(array);
        setState(array);
    };

    const onSetFilterValue = (e) => {
        setFilterValue(e.target.value);
    }

    const onSetValue = (e) => {
        setNameValue(e.target.value)
    }

    const searchByName = (name) => {

        try{
            if (name.length === 1 ) {
                onSetData(data);
            } else {
                const filterArray = state.filter(item => item["name"].toLowerCase().match(nameValue.toLowerCase()));
                onSetData(filterArray);
            }
        } catch(e){
            console.log( `Error: ${e.name}: ${e.message}`);
        }
    }

    const filterByCountry = (value) => {
        try{
            if (value === "All" ) {
                onSetData(data);
            } else {
                const filterArray = data.filter(item => item["country"] === value);
                onSetData(filterArray);
            }
        }catch(e){
            console.log( `Error: ${e.name}: ${e.message}`);
        }
    };

    const itemBox = state ? <CoffeItemsBox data={state}/> : null;

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
                        <input 
                        onChange={(e) => {
                            onSetValue(e);
                        }}
                        className="text" 
                        name="search" 
                        type="text" 
                        placeholder="start typing here..." 
                        />
                    </label>
                </div>
                <div className="ourCoffee__activ_filter">
                    <label className="text" htmlFor="">Or filter
                        <input 
                        onClick={(e) => {
                            onSetFilterValue(e);
                        }} 
                        className="text" 
                        type="button" 
                        value="All" 
                        />
                        <input
                        onClick={(e) => {
                            onSetFilterValue(e);
                        }} 
                        className="text"
                        type="button"
                        value="Brazil"
                         />
                        <input 
                        onClick={(e) => {
                            onSetFilterValue(e);
                        }}
                        className="text" 
                        type="button" 
                        value="Kenya" 
                        />
                        <input 
                        onClick={(e) => {
                            onSetFilterValue(e);
                        }}
                        className="text" 
                        type="button" 
                        value="Columbia" 
                        />
                    </label>
                </div>
            </div> {/* active */}
               {itemBox}      
        </div>
        </>
    )
}

export default OurCoffee;