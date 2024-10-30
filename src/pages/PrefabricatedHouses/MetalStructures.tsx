import MyForm from '../../components/MyForm/MyForm';
import './PrefabricatedHouses.css';

import PhotoGallery13 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery13.png';  
import PhotoGallery14 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery14.jpg';  
import PhotoGallery15 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery15.jpeg'; 

const MetalStructures: React.FC = () => {
    return (
        <div className="prefabricatedHouses">
            <h1>Металлоконструкции</h1>
            
            <div className='prefabricatedHouses_block'>
                <p>
                    Сегодня металлические конструк ции широко применяются в разных сферах бизнеса и
                    в быту. Они отличаются надежностью, долговечностью, легкостью монтажа/демонтажа
                    и возможностью адаптации к различным условиям эксплуатации.
                </p>
                <img src={PhotoGallery13} alt='Быстровозводимый дом' />
            </div>
            
            <div className='prefabricatedHouses_block'>
                <img src={PhotoGallery14} alt='Быстровозводимый дом' />
                <p>
                    Металлоконструкции обеспечивают мобильность и адаптивность при
                    частых передислокациях производственных, торговых, складских и
                    сельскохозяйственных площадей. Они позволяют быстро собрать и
                    разобрать сооружение, не уступая при этом по прочности и
                    долговечности традиционным строительным материалам.
                </p>
            </div>
            
            <div className='prefabricatedHouses_block'>
                <p>
                    При расширении бизнеса предприниматели могут легко и быстро
                    добавить необходимые секции к зданиям или установить новое
                    оборудование. А при необходимости устаревшие конструкции можно
                    заменить на более современные и эффективные.
                </p>
                <img src={PhotoGallery15} alt='Быстровозводимый дом' />
            </div>
            
            <MyForm />
        </div>
    );
}

export default MetalStructures;