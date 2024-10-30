import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css'
import header1 from '../../assets/images/bgImages/header1.jpg';
import header2 from '../../assets/images/bgImages/header2.jpg';
import header3 from '../../assets/images/bgImages/header3.jpg';
import { useState } from 'react';
import MyModal from '../MyModal/MyModal';
import MyForm from '../MyForm/MyForm';

const SimpleSlider: React.FC = () => {
    const [isModalFormVisible, setModalFormVisible] = useState<boolean>(false);
    
    const handleShowModalForm = () => {
        setModalFormVisible(!isModalFormVisible);
    }
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    };
    
    return (
        <>
            <div className='SimpleSlider_wrapper'>
                <Slider {...settings} className='SimpleSlider'>
                    <img src={header1} alt="Slide 1" className="SimpleSlider_img one" />
                    <img src={header2} alt="Slide 2" className="SimpleSlider_img two" />
                    <img src={header3} alt="Slide 2" className="SimpleSlider_img three" />
                </Slider>
                
                <div className='SimpleSlider_wrapperContent'>
                    <h2>
                        СТЕЛЛАЖНОЕ ОБОРУДОВАНИЕ <br />
                        ДЛЯ ВАШЕГО БИЗНЕСА
                    </h2>
                    
                    <p>
                        ПРОЕКТИРУЕМ И ПОСТАВЛЯЕМ СТЕЛЛАЖИ ДЛЯ СЕКТОРОВ СОВРЕМЕННОЙ ТОРГОВЛИ, <br />
                        РАСПРЕДЕЛИТЕЛЬНЫХ ЦЕНТРОВ И РАЗЛИЧНЫХ ВИДОВ СКЛАДОВ
                    </p>
                    <button className='app_mainButton header' onClick={handleShowModalForm}>оставить заявку</button>
                </div>
            </div>
            
            <MyModal visible={isModalFormVisible} setVisible={setModalFormVisible} onCloseModal={handleShowModalForm}>
                <MyForm />
            </MyModal>
        </>
    );
};

export default SimpleSlider;
