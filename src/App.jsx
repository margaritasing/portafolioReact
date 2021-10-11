import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import DesignerList from "./components/designerList/DesignerList"
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";



const App = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return <div className = "" style={{ backgroundColor:darkMode ? "#222" : "white", color: darkMode && "#fff" }} >
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <DesignerList/>
        <Contact/>
      
        </div>


};

export default App;