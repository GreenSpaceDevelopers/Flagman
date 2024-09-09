import Form from '../../components/Form/Form';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import './Main.css';

const Main: React.FC = () => {
    return (
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
                
                <button className='app_mainButton header'>оставить заявку</button>
            </header>
            
            <main>
                <div className='main_companyInfo_container'>
                    <div className='main_companyInfo_text'>
                        <h2>О компании</h2>
                        <p>
                            ШЕЛФСТОР - официальный дилер АО "Опытный завод "Микрон".
                            Проектирование, поставка, монтаж торгового 
                            и складского стеллажного оборудования.
                            Все виды стеллажей, комплектующие, аксессуары, 
                            нестандартное оборудование под заказ. 
                            Мы всегда готовы реализовывать вместе с вами самые смелые 
                            и амбициозные проекты.
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
                    <Form />
                </div>
            </main>
        </div>
    );
}

export default Main;