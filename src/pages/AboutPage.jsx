import Header from "../components/HEADER/Header";

const AboutPage = () => {
    return(
        <div>
            <Header/>
            <div className="content">
                <div className="page-container" style={{overflow: "auto"}}>
                    <h3 className="animate-fade-in-up">About Vivekanand College</h3>
                    <p>Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values</p>
                    <p>Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p>
                     <h2>Our Mission</h2>
                <ul>
                    <li>To provide high-quality, accessible education across various disciplines.</li>
                    <li>To foster research, innovation, and creativity among students and faculty</li>
                    <li>To instill strong ethical values and leadership qualities.</li>
                </ul>

                <h2>Our Values</h2>
                <ul>
                    <li>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</li>
                </ul>

                <h2>Our History</h2>
                <p>Founded by Dr.Bapuji Salunkhe, Vivekanand College has a rich history of academic achievements and community service. Over the years, we have expanded our programs, facilities, and outreach initiatives to better serve our students and the community.</p>                   
                </div>
            </div>
        </div>
    )
}
export default AboutPage;
