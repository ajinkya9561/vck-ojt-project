
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return (
        <div className="main-layout">
            <Header />
            <div className="content">
                <div className="page-container" style={{overflow: "auto"}}>
                    <div className="hero-section">
                        <img alt="Vivekanand College Campus" className="hero-banner-image" src="/images/college-banner.png"></img>
                                    
                        <div className="hero-overlay-text">
                            <h1>Welcome to Vivekanand College!</h1>
                            
                            <p>Your journey to Excellence starts here</p>
                            
                            <Link to="/ApplyNow" className="btn hero-btn" >Apply Now!</Link>
                            {""}
                        </div>
                    </div>
                    
                    <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potentia</p>
                    <p> At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                   
                    <h2>Why Choose Vivekanand College?</h2>
                    <ul>
                        <li><b>Legacy of Excellence:</b> Decades of commitment to quality education</li>
                        <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators</li>
                        <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                        <li><b>Strong Placements:</b> Excellent career opportunities with leading companies</li>
                    </ul>
                    <h2>Campus Life & Facilities</h2>
                    <div className="image-gallery">
                        <img alt="students library" src="/images/students.jpeg" ></img>
                        <img alt="students library" src="/images/campus.jpg" ></img>
                    </div>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                
                    <div className="call-to-action">
                        <p>Ready to Explore Our Courses?</p>
                        <Link to="/courses" className="btn" >Explore Courses!</Link>
                    {""}
                    </div>
                
                </div>

                
            </div>
            <Footer/>
        </div>
    )
}
export default HomePage;
