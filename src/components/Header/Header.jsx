import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header () {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };
    const closeDrawer = () => {
        setDrawerOpen(false);
    };
    return (
        
            <header className="header">
                <div className='clg-name'>
                    <Link to="/" >Vivekanand College</Link>
                </div>
                <nav className="navbar desktop-nav">
                    <Link to="/" className='nav-item' >Home</Link>
                    <Link to="/about" className='nav-item' >About</Link>
                    <Link to="/courses" className='nav-item' >Courses</Link>
                    <Link to="/contact" className='nav-item' >Contact</Link>
                    <Link to="/ApplyNow" className='nav-item btn pm-btn' >Apply Now!</Link>
                </nav>
                <button
                    className='hamburger-menu'
                    onClick={toggleDrawer}>
                    <span className='hamburger-icon'></span>
                    <span className='hamburger-icon'></span>
                    <span className='hamburger-icon'></span>
                </button>
                <nav className={`drawer-nav${isDrawerOpen ? " open" : ""}`}>
                    <button
                        className="close-drawer-btn"
                        onClick={toggleDrawer}>✕</button>
                    <Link to="/" className='nav-item' onClick={closeDrawer}>Home</Link>
                    <Link to="/about" className='nav-item' onClick={closeDrawer}>About</Link>
                    <Link to="/courses" className='nav-item' onClick={closeDrawer}>Courses</Link>
                    <Link to="/contact" className='nav-item' onClick={closeDrawer}> Contact</Link>
                    <Link to="/ApplyNow" className='nav-item btn pm-btn' onClick={closeDrawer}>Apply Now!</Link>
                </nav>
                {isDrawerOpen && ( <div className="drawer-overlay" onClick={closeDrawer}></div>)}
            </header>
        
    )
}
export default Header;