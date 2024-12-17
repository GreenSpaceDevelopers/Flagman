import './Navbar.css';

import navLogo from '../../assets/images/FlagmanLogo1.svg';
import navText from '../../assets/images/FlagmanText.png';

import { List, XLg } from 'react-bootstrap-icons'; 
import { forwardRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MyModal from '../MyModal/MyModal';
import MyForm from '../MyForm/MyForm';

const Navbar = forwardRef<HTMLElement, any>((props, ref) => {
    const screenWidth = window.screen.width;
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
    const [isModalFormVisible, setModalFormVisible] = useState<boolean>(false);
    
    const navigate = useNavigate();
    const location = useLocation();
    const isActiveLink = (path: string) => location.pathname === path;
    
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
                        <div 
                            className={`navbar_link ${isActiveLink('/') ? 'active' : ''}`} 
                            onClick={() => navigate('/')}
                        >
                            главная
                        </div>
                        <div 
                            className={`navbar_link ${isActiveLink('/products') ? 'active' : ''}`} 
                            onClick={() => navigate('/products')}
                        >
                            продукция
                        </div>
                        <div 
                            className={`navbar_link ${isActiveLink('/catalogs') ? 'active' : ''}`} 
                            onClick={() => navigate('/catalogs')}
                        >
                            каталоги
                        </div>
                        <div 
                            className={`navbar_link ${isActiveLink('/metalStructures') ? 'active' : ''}`} 
                            onClick={() => navigate('/metalStructures')}
                        >
                            металлоконструкции
                        </div>
                        <div 
                            className={`navbar_link ${isActiveLink('/houses') ? 'active' : ''}`} 
                            onClick={() => navigate('/houses')}
                        >
                            быстровозводимые дома
                        </div>
                        <a 
                            className={`navbar_link ${location.pathname === '/3d_tour' ? 'active' : ''}`} 
                            href='https://ozm.ru/3d_tour/' 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            3d тур
                        </a>
                    </div> 
                )}
                
                {screenWidth > 1200 && (
                    <div className='navbar_info_container'>
                        <div className='navbar_info_tel'>
                            <p>Отдел продаж</p>
                            <a href="tel:+79057353915">+7 (905) 735-39-15</a>
                        </div>

                        <button
                            className='app_mainButton navbar'
                            onClick={() => {
                                const anchor = document.getElementById('MessageForm');
                                if (anchor) {
                                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                            }}
                        >
                            оставить заявку
                        </button>
                    </div>
                )}

                {screenWidth <= 1200 && (
                    <div>
                        <div>
                            <List onClick={handleDropdownClick} size={30} color='#fff'/>
                        </div>

                        <div className={`navbar_links_container dropdown ${isDropdownVisible ? 'active' : ''}`}>
                            <span>
                                <XLg className='navbar_links_container_dropdownClouse' onClick={handleDropdownClick}
                                     size={25} color='#fff'/>
                            </span>
                            <div className='navbar_link' onClick={() => {
                                navigate('/');
                                handleDropdownClick()
                            }}>главная
                            </div>
                            <div className='navbar_link' onClick={() => {
                                navigate('/products');
                                handleDropdownClick()
                            }}>продукция
                            </div>
                            <div className='navbar_link' onClick={() => {
                                navigate('/catalogs');
                                handleDropdownClick()
                            }}>каталоги
                            </div>
                            <div className='navbar_link' onClick={() => {
                                navigate('/metalStructures');
                                handleDropdownClick()
                            }}>металлоконструкции
                            </div>
                            <div className='navbar_link' onClick={() => {
                                navigate('/houses');
                                handleDropdownClick()
                            }}>быстровозводимые дома
                            </div>
                            <a className='navbar_link' onClick={() => handleDropdownClick()}
                               href='https://ozm.ru/3d_tour/' target='_blank' rel="noopener noreferrer">3d тур</a>

                            <span className='navbar_dropdownButton_span'>
                                <a className='navbar_dropdownButtonTel' href="tel:+79057353915">+7 (905) 735-39-15</a>
                            </span>

                            <span className='navbar_dropdownButton_span'>
                                <button
                                    className='navbar_dropdownButton'
                                    onClick={() => {
                                        const anchor = document.getElementById('MessageForm');
                                        if (anchor) {
                                            anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
                                        }
                                        handleDropdownClick();
                                    }}
                                >
                                    оставить заявку
                                </button>

                            </span>
                        </div>
                    </div>
                )}
            </nav>

            <MyModal visible={isModalFormVisible} setVisible={setModalFormVisible} onCloseModal={handleShowModalForm}>
                <MyForm/>
            </MyModal>
        </>
    );
})

export default Navbar;