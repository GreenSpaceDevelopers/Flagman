import './Navbar.css';

import navLogo from '../../assets/images/FlagmanLogo1.svg';
import navText from '../../assets/images/FlagmanText.png';

import { List } from 'react-bootstrap-icons'; 
import { forwardRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyModal from '../MyModal/MyModal';
import MyForm from '../MyForm/MyForm';

const Navbar = forwardRef<HTMLElement, any>((props, ref) => {
    const screenWidth = window.screen.width;
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    const [isModalFormVisible, setModalFormVisible] = useState<boolean>(false);
    
    const navigate = useNavigate();
    
    const handleDropdownClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }
    
    const handleShowModalForm = () => {
        setModalFormVisible(!isModalFormVisible);
    }
    
    return (
        <>
            <nav className="Navbar" ref={ref}>
                <div className='navbar_logo_container' onClick={() => navigate('/')}>
                    <img className='navbar_logo' src={navLogo} alt='Flagman' />
                    <img className='navbar_logo2' src={navText} alt='Flagman' />
                </div>
                
                {screenWidth > 1200 && (
                    <div className='navbar_links_container'>
                        <div className='navbar_link' onClick={() => navigate('/')}>главная</div>
                        <div className='navbar_link' onClick={() => navigate('/products')}>продукция</div>
                        <div className='navbar_link' onClick={() => navigate('/catalogs')}>каталоги</div>
                        <div className='navbar_link' onClick={() => navigate('/metalStructures')}>металлоконструкции</div>
                        <div className='navbar_link' onClick={() => navigate('/houses')}>быстровозводимые дома</div>
                        <a className='navbar_link' href='https://ozm.ru/3d_tour/' target='_blank' rel="noopener noreferrer">3d тур</a>
                    </div> 
                )}
                
                {screenWidth > 1200 && (
                    <div className='navbar_info_container'>
                        <div className='navbar_info_tel'>
                            <p>Отдел продаж</p>
                            <a>+7 (000) 000-00-00</a>
                        </div>
                        
                        <button className='app_mainButton navbar' onClick={handleShowModalForm}>оставить заявку</button>
                    </div>
                )}
                
                {screenWidth <= 1200 && (
                    <div>
                        <div>
                            <List onClick={handleDropdownClick} size={30} color='#fff' />
                        </div>
                        {isDropdownVisible && (
                            <div className='navbar_links_container dropdown'>
                                <div className='navbar_link' onClick={() => navigate('/')}>главная</div>
                                <div className='navbar_link' onClick={() => navigate('/products')}>продукция</div>
                                <div className='navbar_link' onClick={() => navigate('/catalogs')}>каталоги</div>
                                <div className='navbar_link' onClick={() => navigate('/metalStructures')}>металлоконструкции</div>
                            <div className='navbar_link' onClick={() => navigate('/houses')}>быстровозводимые дома</div>
                                <a className='navbar_link' href='https://ozm.ru/3d_tour/' target='_blank' rel="noopener noreferrer">3d тур</a>
                                <button className='navbar_dropdownButton' onClick={handleShowModalForm}>оставить заявку</button>
                            </div> 
                        )}
                    </div>
                )}
            </nav>
            
            <MyModal visible={isModalFormVisible} setVisible={setModalFormVisible}>
                <MyForm />
            </MyModal>
        </>
    );
})

export default Navbar;
