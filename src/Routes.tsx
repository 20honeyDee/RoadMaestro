import {Route, Routes} from "react-router-dom";

//IMPORT COMPONENTS
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import Fundamental from "./Pages/Fundamental";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fundamental" element={<Fundamental />} />
        </Routes>
    )
};

export default AppRoutes;