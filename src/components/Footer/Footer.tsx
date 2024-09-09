import { EnvelopeAtFill, GeoAltFill, Telegram, TelephoneFill, Whatsapp } from 'react-bootstrap-icons';
import './Footer.css';

import GSDevLogo from '../../assets/images/GSDevLogo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="Footer">
            <div className='footer_info_container'>
                <div className='footer_tels_container'>
                    <TelephoneFill size={40} color='#14ACE9' />
                    <div className='footer_tels'>
                        <p><b>Телефон:<br /></b></p>
                        <a>+7 (000) 000-00-00</a>
                    </div>
                </div>
                
                <div className='footer_address_container'>
                    <GeoAltFill size={40} color='#14ACE9' />
                    <p>
                        <b>Адрес:<br /></b> 182101, Псковская область, г. Великие Луки, 
                        проспект Гагарина, 116Б
                    </p>
                </div>
                
                <div className='footer_contacts_container'>
                    <EnvelopeAtFill size={40} color='#14ACE9' />
                    <div>
                        <p><b>Контакты:</b></p>
                        <p>met.lajn@yandex.ru</p>
                        <div className='footer_contacts_icons'>
                            <a>
                                <Telegram size={25} color='#24a1de' />
                            </a>
                            <a>
                                <Whatsapp size={25} color='#12AF0A' />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='footer_developers_container'>
                    <div>
                        <img src={GSDevLogo} alt='GSDev' />
                        <div>
                            <p><b>Студия разработки:</b></p>
                            <a href='https://greenspacedev.ru/' target='_blank' rel="noopener noreferrer">GreenSpaceDev</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <p>&copy; 2024 OOO "Flagman". Все права защищены.</p>   
        </footer>
    );
}

export default Footer;