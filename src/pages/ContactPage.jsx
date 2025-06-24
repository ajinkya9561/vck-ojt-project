import Header from "../components/HEADER/Header";

const ContactPage = () => {
    return(
        <div>
            <Header/>
            <div className="content" >
                   <div className="page-container" style={{overflow: "auto"}}>
                        <h3>Contact Us</h3>
                        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                        Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements
                        <h2>General Inquiries</h2>
                        <p><strong>Vivekanand College Main Campus</strong><br></br>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br></br>India</p>
                        <p>Phone: <b>+91 12345 67890</b><br></br>Email: <b>info@vivekanandcollege.edu</b><br></br>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
                        <h2>Admission Office</h2>
                        <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>Phone: +91 98765 43210<br></br>Email: admissions@vivekanandcollege.edu</p>
                        <h2>Students Supports Service</h2>
                        <p>For current student support, academic advising, or general assistance:<br></br>Phone: +91 87654 32109<br></br>Email: studentsupport@vivekanandcollege.edu</p>
                        <h2>Find Us on the Map</h2>
                        <p><br></br><a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
                        <h2>Send us a Massage</h2>
                        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
                   </div>
            
             </div>
        </div>
    )
}
export default ContactPage;

