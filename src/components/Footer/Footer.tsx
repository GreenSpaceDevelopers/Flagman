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
                        <a href="tel:+79057353915">+7 (905) 735-39-15</a>
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
                        <a className='footer_contacts_mail_href' href="mailto:met.lajn@yandex.ru">met.lajn@yandex.ru</a>
                        <div className='footer_contacts_icons'>
                            <a href="https://t.me/Flagman_60" target="_blank" rel="noopener noreferrer">
                                <Telegram size={25} color="#24a1de"/>
                            </a>

                            <a href='https://wa.me/79057353915' target="_blank" rel="noopener noreferrer">
                                <Whatsapp size={25} color='#12AF0A'/>
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
            
            <p>&copy; 2024 OOO "Флагман". Все права защищены.</p>   
        </footer>
    );
}

export default Footer;