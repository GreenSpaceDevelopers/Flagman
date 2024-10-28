import { useState } from 'react';
import MyForm from '../../components/MyForm/MyForm';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import './Main.css';
import MyModal from '../../components/MyModal/MyModal';

const Main: React.FC = () => {
    const [isModalFormVisible, setModalFormVisible] = useState<boolean>(false);
    
    const handleShowModalForm = () => {
        setModalFormVisible(!isModalFormVisible);
    }
    return (
        <>
            <div className="Main">
                <header>
                    <h2>
                        СТЕЛЛАЖНОЕ ОБОРУДОВАНИЕ <br />
                        ДЛЯ ВАШЕГО БИЗНЕСА
                    </h2>
                    
                    <p>
                        ПРОЕКТИРУЕМ И ПОСТАВЛЯЕМ СТЕЛЛАЖИ ДЛЯ СЕКТОРОВ СОВРЕМЕННОЙ ТОРГОВЛИ, <br />
                        РАСПРЕДЕЛИТЕЛЬНЫХ ЦЕНТРОВ И РАЗЛИЧНЫХ ВИДОВ СКЛАДОВ
                    </p>
                    
                    <button className='app_mainButton header' onClick={handleShowModalForm}>оставить заявку</button>
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
                            <img className='main_companyInfo_img' alt='Flagman' />
                        </div>
                    </div>
                    
                    <div className='main_photogallery_container'>
                        <PhotoGallery />
                    </div>
                    
                    <div className='main_from_container'>
                        <MyForm />
                    </div>
                </main>
            </div>
            
            <MyModal visible={isModalFormVisible} setVisible={setModalFormVisible}>
                <MyForm />
            </MyModal>
        </>
    );
}

export default Main;