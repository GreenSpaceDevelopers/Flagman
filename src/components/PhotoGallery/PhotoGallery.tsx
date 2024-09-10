import PhotoGalleryConsts from '../../helpers/constants/PhotoGalleryConst';
import './PhotoGallery.css';

const PhotoGallery: React.FC = () => {
    return (
        <div className="PhotoGallery">
            <h2>ФОТОГАЛЕРЕЯ</h2>
            <p>Складское оборудование</p>
            <div className='photoGallery_images_container'>
                {PhotoGalleryConsts.PhotoGalleryWarehouseImages.map((imgUrl, idx) => (
                    <img className='photoGallery_image' src={imgUrl} alt='' key={idx} />
                ))}
            </div>
            
            <p>Складское оборудование</p>
            <div className='photoGallery_images_container'>
                {PhotoGalleryConsts.PhotoGalleryTradeImages.map((imgUrl, idx) => (
                    <img className='photoGallery_image' src={imgUrl} alt='' key={idx} />
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;