import {Route, Routes} from "react-router-dom";

//IMPORT COMPONENTS
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import Fundamental from "./Pages/CarParts";
import BlowBagaPage from "./Pages/BlowBaga";
import TrafficLightsPage from "./Pages/TrafficLights";
import FundamentalsPage from "./Pages/FundamentalsPage";
import RoadSignPage from "./Pages/RoadSigns";
import LawsAndFinesPage from "./Pages/LawsAndFines";
import QuizPage from "./Pages/Quiz";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fundamentals" element={<FundamentalsPage />} />
            <Route path="/fundamentals/car_parts" element={<Fundamental />} />
            <Route path="/fundamentals/blowbaga" element={<BlowBagaPage />} />
            <Route path="/fundamentals/traffic_lights" element={<TrafficLightsPage />} />
            <Route path="/fundamentals/roadsigns" element={<RoadSignPage />} />
            <Route path="/fundamentals/laws_and_fines" element={<LawsAndFinesPage />} />
            <Route path="/fundamentals/quiz" element={<QuizPage />} />
        </Routes>
    )
};

export default AppRoutes;