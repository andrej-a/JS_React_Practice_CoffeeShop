import React, { lazy, Suspense } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.scss";

import Spinner from "../Spinner/Spinner";
const Menu = lazy(() => import("../Menu/Menu"));
const Footer = lazy(() => import("../Footer/Footer"));
const Main = lazy(() => import("../Main/Main"));
const OurCoffee = lazy(() => import("../OurCoffee/OurCoffee"))
const PleasurePage = lazy(() => import("../PleasurePage/PleasurePage"))
const SinglePage = lazy(() => import("../SinglePage/SinglePage"));
const Page404 = lazy(() => import("../404/404"));

function App() {

    return (
        <Router>
            <div className="app">
            <Suspense fallback={<Spinner />}>
                <Menu class={"menu-header"} logo={"menu-header__logo-header"}/>
                    <main>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/ourcoffee" element={<OurCoffee />}/>
                            <Route path="/pleasure" element={<PleasurePage />}/>
                            <Route path="/ourcoffee/:itemID" element={<SinglePage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </main>
                <Footer />
            </Suspense>
            </div>
        </Router>
    )
}

export default App;
