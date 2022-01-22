import React, { lazy, Suspense } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss";

import Spinner from "../Spinner/Spinner";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
const Main = lazy(() => import("../Main/Main"));
const OurCoffee = lazy(() => import("../OurCoffee/OurCoffee"))
const PleasurePage = lazy(() => import("../PleasurePage/PleasurePage"))
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
                            <Route path="/pleasure" element={<PleasurePage />}/>
                            <Route path="/ourcoffee/:itemID" element={<SinglePage />} />
                            <Route path="*" element={<Main />} />
                        </Routes>
                    </Suspense>
                    </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
