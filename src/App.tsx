import { useEffect, useRef, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { ArrowUpSquareFill } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const App: React.FC = function() {
    const [navbarHeight, setNavbarHeight] = useState<number>(0);
    const navbarRef = useRef<HTMLElement | null>(null);
    const screenWidth = window.screen.width;
    const location = useLocation();
    
    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []); 
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <>
            <Navbar ref={navbarRef} />
            <div className="App" style={{ marginTop: `${navbarHeight}px` }}>
                <AppRouter />
                
                {screenWidth > 940 && (
                    <ArrowUpSquareFill className="scrollToTopButton" onClick={scrollToTop} size={50} />
                )}
            </div>
            <Footer />
        </>
    );
}

export default App;