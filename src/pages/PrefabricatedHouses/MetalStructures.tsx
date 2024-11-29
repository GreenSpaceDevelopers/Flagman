import MyForm from '../../components/MyForm/MyForm';
import './PrefabricatedHouses.css';

import PhotoGallery13 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery13.png';
import PhotoGallery14 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery14.jpg';
import PhotoGallery15 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery15.jpeg';
import PhotoGallery16 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery16.jpg';
import {useEffect, useState} from "react";

const MetalStructures: React.FC = () => {
    const [isPageVisible, setPageVisible] = useState<boolean>(false);

    useEffect(() => {
        setPageVisible(true);
    }, [])

    return (
        <div className={`prefabricatedHouses ${isPageVisible ? 'visible' : ''}`}>
            <h1>Металлоконструкции</h1>

            <div className='prefabricatedHouses_block'>
                <p>
                    Основной вид деятельности ООО «Флагман» — изготовление несущих и ограждающих металлоконструкций для
                    зданий и сооружений. Металлоконструкции — это незаменимый вид строительных материалов, пользующийся
                    постоянным спросом.
                </p>
                <img src={PhotoGallery13} alt='Быстровозводимый дом' />
            </div>

            <div className='prefabricatedHouses_block'>
                <img src={PhotoGallery14} alt='Быстровозводимый дом' />
                <p>
                    Прочность и устойчивость: Металлоконструкции обладают высокой прочностью и способностью выдерживать
                    различные нагрузки, включая ветровые, сейсмические и собственный вес. Они обеспечивают стабильность
                    и надежность здания на протяжении длительного времени.
                </p>
            </div>

            <div className='prefabricatedHouses_block'>
                <p>
                    Быстрота монтажа: Использование металлоконструкций позволяет сократить время строительства благодаря
                    простоте и быстроте их монтажа. Заранее изготовленные элементы легко соединяются на строительной
                    площадке, что ускоряет процесс и сокращает затраты на рабочую силу.
                </p>
                <img src={PhotoGallery15} alt='Быстровозводимый дом' />
            </div>

            <div className='prefabricatedHouses_block'>
                <img src={PhotoGallery16} alt='Быстровозводимый дом' />
                <p>
                    Экономичность: Металлоконструкции являются экономически эффективным решением, поскольку требуют
                    меньшего количества материалов и времени на строительство по сравнению с традиционными методами.
                    Они также обладают долгим сроком службы и минимальными затратами на обслуживание.
                </p>
            </div>

            <MyForm />
        </div>
    );
}

export default MetalStructures;