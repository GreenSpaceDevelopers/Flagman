import MyForm from '../../components/MyForm/MyForm';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import './Main.css';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver';
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider';
import {useEffect, useState} from "react";
import FlagmanCertificate from '../../assets/images/FlagmanCertificate.png';

const Main: React.FC = () => {
    const [isPageVisible, setPageVisible] = useState<boolean>(false);
    useIntersectionObserver('.main_companyInfo_container', 'main_companyInfo_container_animation', 0.5);

    useEffect(() => {
        setPageVisible(true);
    }, [])
    
    return (
        <>
            <div className={`Main ${isPageVisible ? 'visible' : ''}`}>
                <header>
                    <SimpleSlider />
                </header>

                <main>
                    <div className='main_companyInfo_container'>
                        <div className='main_companyInfo_text'>
                            <h2>О компании</h2>
                            <p>
                                ООО "Флагман" — официальный дилер АО "Опытный завод "Микрон". Проектирование, поставка, собственное производство, 
                                монтаж торгового и складского стеллажного оборудования. Все виды стеллажей, комплектующие, аксессуары, нестандартное 
                                оборудование под заказ. Мы всегда готовы реализовывать вместе с вами самые смелые и амбициозные проекты.
                            </p>
                        </div>
                        
                        <div className='main_companyInfo_imgContainer'>
                            <img className='main_companyInfo_img' src={FlagmanCertificate} alt='Flagman' />
                        </div>
                    </div>

                    <div className='main_photogallery_container'>
                        <PhotoGallery/>
                    </div>

                    <div className='main_from_container' id='MessageForm'>
                        <MyForm/>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Main;