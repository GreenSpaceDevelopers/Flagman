import { useEffect, useRef, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { ArrowUpSquareFill } from 'react-bootstrap-icons';

const App: React.FC = function() {
    const [navbarHeight, setNavbarHeight] = useState<number>(0);
    const navbarRef = useRef<HTMLElement | null>(null);
    
    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []); 
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <>
            <Navbar ref={navbarRef} />
            <div className="App" style={{ marginTop: `${navbarHeight}px` }}>
                <AppRouter />
                
                <ArrowUpSquareFill className="scrollToTopButton" onClick={scrollToTop} size={50} />
            </div>
            <Footer />
        </>
    );
}

export default App;