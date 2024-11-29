import MyForm from '../../components/MyForm/MyForm';
import './PrefabricatedHouses.css';

import PhotoGallery18 from '../../assets/images/PhotoGallery/PrefabricatedHouses/PhotoGallery18.jpg';   
import PhotoGallery19 from '../../assets/images/PhotoGallery/PrefabricatedHouses/PhotoGallery19.jpg';   
import PhotoGallery20 from '../../assets/images/PhotoGallery/PrefabricatedHouses/PhotoGallery20.jpeg';
import {useEffect, useState} from "react";

const PrefabricatedHouses: React.FC = () => {
    const [isPageVisible, setPageVisible] = useState<boolean>(false);

    useEffect(() => {
        setPageVisible(true);
    }, [])

    return (
        <div className={`prefabricatedHouses ${isPageVisible ? 'visible' : ''}`}>
            <h1>Быстровозводимые дома</h1>
            
            <div className='prefabricatedHouses_block'>
                <img src={PhotoGallery18} alt='Быстровозводимый дом' />
                
                <p>
                    Модульные дома - одни из современных,
                    быстро возводимых конструкций. Они
                    теплые и отлично
                    подходят, как для постоянного
                    проживания, так и в качестве сезонных
                    домов для отдыха гостей или
                    семьи в любых климатических условиях.
                </p>
            </div>
            
            <div className='prefabricatedHouses_block'>
                <p>
                    Дом оснащен современными
                    системами отопленияи вентиляции,
                    управление мумным домом и
                    светодиодным освещением, что
                    значительно снижает потребление
                    энергии по сравнению с
                    традиционными домами.
                </p>
                <img className='two' src={PhotoGallery19} alt='Быстровозводимый дом' />
            </div>
            
            <div className='prefabricatedHouses_block'>
                <img src={PhotoGallery20} alt='Быстровозводимый дом' />
                <p>
                    Идеально подходит для тех,у кого мало
                    места для строительства.Они также
                    могут служить садовым
                    домиком или загородным домиком для
                    тех, кто любит проводить время на
                    природе. Натуральные
                    материалы, используемые в
                    производстве, и продуманные
                    архитектурные решения позволят
                    идеально вписаться в любую среду
                </p>
            </div>
            
            <MyForm />
        </div>
    );
}

export default PrefabricatedHouses;