import ProductCard from '../../components/ProductCard/ProductCard';
import AccessoriesForShelvingConsts from '../../helpers/constants/AccessoriesForShelvingConsts';
import CashBoxesConsts from '../../helpers/constants/CashBoxesConsts';
import IntegratedShelvingConsts from '../../helpers/constants/IntegratedShelvingConsts';
import SpecializedRackConsts from '../../helpers/constants/SpecializedRackConsts';
import UniversalShelvingConsts from '../../helpers/constants/UniversalShelvingConsts';
import WarehouseRackConsts from '../../helpers/constants/WarehouseRack';
import './Products.css';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver';

const Products: React.FC = () => {
    useIntersectionObserver('.productCard', 'productCard_animation', 0.5);
    
    return (
        <div className="Products">
            <div className='catalog'>
                <div className='catalogDesc'>
                    <h2>СКЛАДСКИЕ СТЕЛЛАЖИ</h2>
                    <p>
                        МЫ ПРЕВРАЩАЕМ КАЖДЫЙ КВАДРАТНЫЙ МЕТР 
                        СКЛАДСКОГО ПРОСТРАНСТВА В КУБИЧЕСКИЙ МЕТР ПОЛЕЗНОЙ ПЛОЩАДИ
                    </p>
                </div>
                
                <div className='catalogItems'>
                    {WarehouseRackConsts.warehouseRacks.map((wr, idx) => (
                        <ProductCard imgUrl={wr.imgUrl} title={wr.title} desc={wr.desc} key={idx} />
                    ))}
                </div>
            </div>
            
            <div className='catalog'>
                <div className='catalogDesc'>
                    <h2 className='Subtitle'>ТОРГОВОЕ ОБОРУДОВАНИЕ</h2>
                    <p>
                    ЭФФЕКТИВНОЕ РАЗМЕЩЕНИЕ СТЕЛЛАЖЕЙ В ТОРГОВОМ ЗАЛЕ МАГАЗИНА ОПРЕДЕЛЯЕТ ПРИБЫЛЬНОСТЬ РАБОТЫ КОМПАНИИ В ЦЕЛОМ, 
                    ЕЕ КОНКУРЕНТОСПОСОБНОСТЬ И ПЕРСПЕКТИВЫ РАЗВИТИЯ
                    </p>
                    <div className='products_tabs'>
                        <div><a href="#universalShelving">Универсальные стеллажи</a></div>
                        <div><a href="#specializedRacks">Специализированные стеллажи</a></div>
                        <div><a href="#integratedShelving">Интегрированные стеллажи</a></div>
                        <div><a href="#accessoriesForShelving">Аксессуары к торговым стеллажам</a></div>
                        <div><a href="#cashBoxes">Кассовые боксы</a></div>
                        </div>
                </div>
                
                <div id="universalShelving">
                    <h2 className='Subtitle'>УНИВЕРСАЛЬНЫЕ СТЕЛЛАЖИ</h2>
                    <div className='catalogItems'>
                        {UniversalShelvingConsts.warehouseRacks.map((wr, idx) => (
                            <ProductCard imgUrl={wr.imgUrl} title={wr.title} desc={wr.desc}  key={idx} />
                        ))}
                    </div>
                </div>
            </div>
            
            <div className='catalog' id="specializedRacks">
                <h2 className='Subtitle'>СПЕЦИАЛИЗИРОВАННЫЕ СТЕЛЛАЖИ</h2>
                <div className='catalogItems'>
                    {SpecializedRackConsts.specializedRack.map((wr, idx) => (
                        <ProductCard imgUrl={wr.imgUrl} title={wr.title} desc={wr.desc} key={idx} />
                    ))}
                </div>
            </div>
            
            <div className='catalog' id='integratedShelving'>
                <h2 className='Subtitle'>ИНТЕГРИРОВАННЫЕ СТЕЛЛАЖИ</h2>
                <div className='catalogItems'>
                    {IntegratedShelvingConsts.integratedShelving.map((wr, idx) => (
                        <ProductCard imgUrl={wr.imgUrl} title={wr.title} desc={wr.desc} key={idx} />
                    ))}
                </div>
            </div>
            
            <div className='catalog' id='accessoriesForShelving'>
                <h2 className='Subtitle'>АКСЕССУАРЫ К ТОРГОВЫМ СТЕЛЛАЖАМ</h2>
                <div className='catalogItems'>
                    {AccessoriesForShelvingConsts.accessoriesForShelving.map((wr, idx) => (
                        <ProductCard imgUrl={wr.imgUrl} title={wr.title} desc={wr.desc} key={idx} />
                    ))}
                </div>
            </div>
            
            <div className='catalog' id='cashBoxes'>
                <h2 className='Subtitle'>КАССОВЫЕ БОКСЫ</h2>
                <div className='catalogItems'>
                    {CashBoxesConsts.cashBoxes.map((wr, idx) => (
                        <ProductCard imgUrl={wr.imgUrl} title={wr.title} desc={wr.desc} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;