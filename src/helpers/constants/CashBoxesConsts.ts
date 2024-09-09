import { IProduct } from '../../interfaces/IProduct';
import img1 from '../../assets/images/cash_boxes/img1.webp';  
import img2 from '../../assets/images/cash_boxes/img2.webp'; 
import img3 from '../../assets/images/cash_boxes/img3.webp'; 

class CashBoxesConsts {
    public static cashBoxes: IProduct[] = [
        {
            imgUrl: img1, 
            title: 'Кассовый бокс без транспортера',
            desc: 'Для магазинов малых форматов. Для среднего формата без транспортера средней ценовой категории, используется в сетях. Для крупных гипермаркетов – премиальные серии кассовых боксов.'
        },
        {
            imgUrl: img2, 
            title: 'Кассовый бокс с транспортерной лентой',
            desc: 'Чаще всего в торговых сетях используются кассовые боксы с лентой для транспортировки.'
        },
        {
            imgUrl: img3, 
            title: 'Экспресс кассы',
            desc: 'Основное отличие экспресс касс от стандартных моделей – уменьшенные габариты, компактная конструкция, отсутствие длинного транспортера. Кассир принимает не более трех или пяти единиц товаров, в зависимости от установленных магазином стандартов.'
        },
    ];
}

export default CashBoxesConsts;