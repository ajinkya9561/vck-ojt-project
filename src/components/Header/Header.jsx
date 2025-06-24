import{Link} from 'react-router-dom';
import './Header.css';
import { useState } from 'react';

const Header = () => {
    const [drawerOpen , setDrawerOpen ] = useState(false);
    return(
       <div>
            <header className="header">
                <div>
                    <a className='clg-name' href="/home">Vivekanand College</a>
                </div>
                <nav className="navbar desktop-nav">
                    <a className='nav-item' href="/home" >Home</a>
                    <a className='nav-item' href="/about">About</a>
                    <a className='nav-item' href="/courses">Courses</a>
                    <a className='nav-item' href="/contact">Contact</a>
                    <a className='nav-item btn pm-btn' href="/ApplyNow">Apply Now!</a>
                </nav>
                <button
                    className='hamburger-menu'
                    onClick={() => setDrawerOpen(true)}
                >
                    <span className='hamburger-icon'></span>
                    <span className='hamburger-icon'></span>
                    <span className='hamburger-icon'></span>
                </button>
                <nav className={`drawer-nav${drawerOpen ? " open" : ""}`}>
                    <button
                        className="close-drawer-btn"
                        onClick={() => setDrawerOpen(false)}
                    >✕</button>
                    <a className="nav-item-1" href="/home">Home</a>
                    <a className="nav-item-1" href="/about">About</a>
                    <a className="nav-item-1" href="/courses">Courses</a>
                    <a className="nav-item-1" href="/contact">Contact</a>
                    <a className="nav-item-1 btn primary-btn" href="/ApplyNow">Apply Now!</a>
                </nav>
            </header>
        </div>
    )
}
export default Header;

