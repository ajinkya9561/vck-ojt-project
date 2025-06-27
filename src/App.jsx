import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Aboutpage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesePage";
import ContactPage from "./pages/ContactPage";
import "./styles/Pages.css";
import AdmissionPage from "./pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperinfoPopup";


const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Ajinkya Undale"
          studentPhotoUrl="//imagesaj.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/ApplyNow" element={<AdmissionPage/>}/>
        
        </Routes>
        <ChatbotComponent/>
      </Router>

    </div>
  )
}
export default App;