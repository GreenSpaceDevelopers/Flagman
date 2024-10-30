import { useState } from 'react';
import MyModal from '../MyModal/MyModal';
import './ProductCard.css';

interface ProductCardProps {
    imgUrl: string;
    title: string;
    desc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgUrl, title, desc }) => {
    const [productDescModalVisible, setProductDescModalVisible] = useState<boolean>(false);
    
    return (
        <>
            <div className='productCard'>
                <img src={imgUrl} alt={title} />
                <h5>{title}</h5>
                <button onClick={() => setProductDescModalVisible(!productDescModalVisible)}>Подробнее</button>
            </div>
            
            <MyModal visible={productDescModalVisible} setVisible={setProductDescModalVisible} onCloseModal={() => setProductDescModalVisible(false)}>
                <div className='productCard_modal_mainContainer'>
                    <div className='productCard_modal_imgContainer'>
                        <img src={imgUrl} alt={title} />
                    </div>
                    
                    <div className='productCard_modal_descContainer'>
                        <h2>{title}</h2>
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
            </MyModal>
        </>
    );
}

export default ProductCard;