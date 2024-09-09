import { useEffect, useRef, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = function() {
    const [navbarHeight, setNavbarHeight] = useState<number>(0);
    const navbarRef = useRef<HTMLElement | null>(null);
    
    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []); 
    
    return (
        <>
            <Navbar ref={navbarRef} />
            <div className="App" style={{ marginTop: `${navbarHeight}px` }}>
                <AppRouter />
            </div>
            <Footer />
        </>
    );
}

export default App;