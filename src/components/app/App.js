import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import SinglePage from "../SinglePage/SinglePage";
import "./App.scss"

function App() {

    return (
        <div className="app">
            <Menu class={"menu-header"} logo={"menu-header__logo-header"}/>
            <main>
                {/* <Main /> */}
                <SinglePage />
            </main>
            <Footer />
        </div>    
    )
}

export default App;
