import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

import "./App.scss"
function App() {

    return (
        <div className="app">
            <Menu class={"menu-header"} logo={"menu-header__logo-header"}/>
            <main>
                <Main />
            </main>
            <Footer />
        </div>    
    )
}

export default App;
