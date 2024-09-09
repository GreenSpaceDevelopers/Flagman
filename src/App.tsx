import './App.css';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = function() {
    return (
        <>
        <Navbar />
        <div className="App">
            <AppRouter />
        </div>
        <Footer />
        </>
    );
}

export default App;