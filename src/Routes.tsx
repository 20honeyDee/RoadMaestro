import {Route, Routes} from "react-router-dom";

//IMPORT COMPONENTS
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import Fundamental from "./Pages/CarParts";
import BlowBagaPage from "./Pages/BlowBaga";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fundamental/car_parts" element={<Fundamental />} />
            <Route path="/fundamental/blowbaga" element={<BlowBagaPage />} />
        </Routes>
    )
};

export default AppRoutes;