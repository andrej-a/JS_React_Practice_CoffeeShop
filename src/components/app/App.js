import React, { lazy, Suspense } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss"
import Spinner from "../Spinner/Spinner";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import OurCoffee from "../OurCoffee/OurCoffee";
const Main = lazy(() => import("../Main/Main"));
const SinglePage = lazy(() => import("../SinglePage/SinglePage"));

function App() {

    return (
        <Router>
            <div className="app">
                <Menu class={"menu-header"} logo={"menu-header__logo-header"}/>
                    <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/ourcoffee" element={<OurCoffee />}/>
                            <Route path="/ourcoffee/:itemID" element={<SinglePage />} />
                        </Routes>
                    </Suspense>
                    </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
