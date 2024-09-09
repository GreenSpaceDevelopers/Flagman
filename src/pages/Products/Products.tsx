import From from '../../components/Form/Form';
import AccessoriesForShelvingConsts from '../../helpers/constants/AccessoriesForShelvingConsts';
import CashBoxesConsts from '../../helpers/constants/CashBoxesConsts';
import IntegratedShelvingConsts from '../../helpers/constants/IntegratedShelvingConsts';
import SpecializedRackConsts from '../../helpers/constants/SpecializedRackConsts';
import UniversalShelvingConsts from '../../helpers/constants/UniversalShelvingConsts';
import WarehouseRackConsts from '../../helpers/constants/WarehouseRack';
import './Products.css';

const Products: React.FC = () => {
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
                        <div className='catalogItem' key={idx}>
                            <img src={wr.imgUrl} alt={wr.title} />
                            <h5>{wr.title}</h5>
                            <p>{wr.desc}</p>
                        </div>
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
                </div>
                
                <h2 className='Subtitle'>УНИВЕРСАЛЬНЫЕ СТЕЛЛАЖИ</h2>
                <div className='catalogItems'>
                    {UniversalShelvingConsts.warehouseRacks.map((wr, idx) => (
                        <div className='catalogItem' key={idx}>
                            <img src={wr.imgUrl} alt={wr.title} />
                            <h5>{wr.title}</h5>
                            <p>{wr.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='catalog'>
                <h2 className='Subtitle'>СПЕЦИАЛИЗИРОВАННЫЕ СТЕЛЛАЖИ</h2>
                <div className='catalogItems'>
                    {SpecializedRackConsts.specializedRack.map((wr, idx) => (
                        <div className='catalogItem' key={idx}>
                            <img src={wr.imgUrl} alt={wr.title} />
                            <h5>{wr.title}</h5>
                            <p>{wr.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='catalog'>
                <h2 className='Subtitle'>ИНТЕГРИРОВАННЫЕ СТЕЛЛАЖИ</h2>
                <div className='catalogItems'>
                    {IntegratedShelvingConsts.integratedShelving.map((wr, idx) => (
                        <div className='catalogItem' key={idx}>
                            <img src={wr.imgUrl} alt={wr.title} />
                            <h5>{wr.title}</h5>
                            <p>{wr.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='catalog'>
                <h2 className='Subtitle'>АКСЕССУАРЫ К ТОРГОВЫМ СТЕЛЛАЖАМ</h2>
                <div className='catalogItems'>
                    {AccessoriesForShelvingConsts.accessoriesForShelving.map((wr, idx) => (
                        <div className='catalogItem' key={idx}>
                            <img src={wr.imgUrl} alt={wr.title} />
                            <h5>{wr.title}</h5>
                            <p>{wr.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='catalog'>
                <h2 className='Subtitle'>КАССОВЫЕ БОКСЫ</h2>
                <div className='catalogItems'>
                    {CashBoxesConsts.cashBoxes.map((wr, idx) => (
                        <div className='catalogItem' key={idx}>
                            <img src={wr.imgUrl} alt={wr.title} />
                            <h5>{wr.title}</h5>
                            <p>{wr.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <From />
            </div>
        </div>
    );
}

export default Products;