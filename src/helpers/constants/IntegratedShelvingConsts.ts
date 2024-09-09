import { IProduct } from '../../interfaces/IProduct';
import img1 from '../../assets/images/integrated_shelving/img1.webp';  
import img2 from '../../assets/images/integrated_shelving/img2.webp'; 

class IntegratedShelvingConsts {
    public static integratedShelving: IProduct[] = [
        {
            imgUrl: img1, 
            title: 'Интеграция G50',
            desc: 'Интеграция торговых стеллажей в складские. Это одно из самых эффективных решений для склад-магазинов, в которых площадь используется и для хранения товаров, и для обслуживания покупателей. В грузовые стеллажи серии G50 интегрируются совместимые торговые стеллажи серии К25'
        },
        {
            imgUrl: img2, 
            title: 'Элементы интеграции',
            desc: 'Элементы интеграции.'
        },
    ];
}

export default IntegratedShelvingConsts;