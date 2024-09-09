import './Navbar.css';

import navLogo from '../../assets/images/FlagmanLogo1.svg';
import navText from '../../assets/images/FlagmanText.png';

import { List } from 'react-bootstrap-icons'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const screenWidth = window.screen.width;
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    
    const navigate = useNavigate();
    
    const handleDropdownClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }
    
    return (
        <nav className="Navbar">
            <div className='navbar_logo_container' onClick={() => navigate('/')}>
                <img className='navbar_logo' src={navLogo} alt='Flagman' />
                <img className='navbar_logo2' src={navText} alt='Flagman' />
            </div>
            
            {screenWidth > 940 && (
                <div className='navbar_links_container'>
                    <div className='navbar_link' onClick={() => navigate('/')}>главная</div>
                    <div className='navbar_link' onClick={() => navigate('/products')}>продукция</div>
                    <div className='navbar_link' onClick={() => navigate('/catalogs')}>каталоги</div>
                    <a className='navbar_link' href='https://ozm.ru/3d_tour/' target='_blank' rel="noopener noreferrer">3d тур</a>
                </div> 
            )}
            
            {screenWidth > 940 && (
                <div className='navbar_info_container'>
                    <div className='navbar_info_tel'>
                        <p>Отдел продаж</p>
                        <a>+7 (000) 000-00-00</a>
                    </div>
                    
                        <button className='app_mainButton navbar'>оставить заявку</button>
                </div>
            )}
            
            {screenWidth <= 940 && (
                <div>
                    <div>
                        <List onClick={handleDropdownClick} size={30} color='#fff' />
                    </div>
                    {isDropdownVisible && (
                        <div className='navbar_links_container dropdown'>
                            <div className='navbar_link' onClick={() => navigate('/')}>главная</div>
                            <div className='navbar_link' onClick={() => navigate('/products')}>продукция</div>
                            <div className='navbar_link' onClick={() => navigate('/catalogs')}>каталоги</div>
                            <a className='navbar_link' href='https://ozm.ru/3d_tour/' target='_blank' rel="noopener noreferrer">3d тур</a>
                            <a className='navbar_links_container formLink'>оставить заявку</a>
                        </div> 
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;