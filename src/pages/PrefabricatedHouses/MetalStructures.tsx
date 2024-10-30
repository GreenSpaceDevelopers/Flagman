import MyForm from '../../components/MyForm/MyForm';
import './PrefabricatedHouses.css';

import PhotoGallery13 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery13.png';  
import PhotoGallery14 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery14.jpg';  
import PhotoGallery15 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery15.jpeg'; 
import PhotoGallery16 from '../../assets/images/PhotoGallery/MetalStructures/PhotoGallery16.jpg'; 

const MetalStructures: React.FC = () => {
    return (
        <div className="prefabricatedHouses">
            <h1>Металлоконструкции</h1>
            
            <div className='prefabricatedHouses_block'>
                <p>
                    Основной вид деятельности ООО «Флагман» — изготовление несущих и ограждающих металлоконструкций для зданий и сооружений. 
                    Металлоконструкции — это незаменимый вид строительных материалов, пользующийся постоянным спросом.
                </p>
                <img src={PhotoGallery13} alt='Быстровозводимый дом' />
            </div>
            
            <div className='prefabricatedHouses_block'>
                <img src={PhotoGallery14} alt='Быстровозводимый дом' />
                <p>
                    Основными достоинствами металлических конструкций являются высокая несущая способность и высокая надежность. 
                    Высокая несущая способность означает возможность воспринимать значительные нагрузки при относительно небольших 
                    сечениях вследствие значительной прочности металла. Надежность конструкций обеспечивается тем, что они могут быть 
                    рассчитаны достаточно точно, что делает их легкими и транспортабельными.
                </p>
            </div>
            
            <div className='prefabricatedHouses_block'>
                <p>
                    Металлические конструкции почти в четыре раза легче железобетонных и зачастую легче деревянных 
                    (при использовании на одинаковые нагрузки). Благодаря этому они более транспортабельны и легко монтируются. 
                    Сплошность материала и соединений позволяет создавать водо- и газонепроницаемые конструкции.
                </p>
                <img src={PhotoGallery15} alt='Быстровозводимый дом' />
            </div>
            
            <div className='prefabricatedHouses_block'>
                <img src={PhotoGallery16} alt='Быстровозводимый дом' />
                <p>
                    Также металлические конструкции обладают высокой степенью индустриальности, так как изготавливаются на заводе. 
                    Они удобны в эксплуатации, поскольку легко могут быть усилены при увеличении нагрузок. Такие конструкции незаменимы 
                    при реконструкциях и легко ремонтируются.
                    <br />
                    <br />
                    Металлические конструкции применяются во всех инженерных сооружениях значительных пролетов, высоты и нагрузок.
                </p>
            </div>
            
            <MyForm />
        </div>
    );
}

export default MetalStructures;