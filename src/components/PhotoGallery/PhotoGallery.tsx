import PhotoGalleryConsts from '../../helpers/constants/PhotoGalleryConst';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver';
import './PhotoGallery.css';

const PhotoGallery: React.FC = () => {
    useIntersectionObserver('.photoGallery_images_container', 'photoGallery_images_container_animation', 0.5);
    useIntersectionObserver('.PhotoGallery_mainTitle', 'PhotoGallery_mainTitle_animation', 0.5);
    useIntersectionObserver('.PhotoGallery_mainSubTitle', 'PhotoGallery_mainSubTitle_animation', 0.5);
    
    return (
        <div className="PhotoGallery">
            <p className='PhotoGallery_mainSubTitle'>Складское оборудование</p>
            <div className='photoGallery_images_container'>
                {PhotoGalleryConsts.PhotoGalleryWarehouseImages.map((imgUrl, idx) => (
                    <img className='photoGallery_image' src={imgUrl} alt='' key={idx} />
                ))}
            </div>
            
            <p className='PhotoGallery_mainSubTitle'>Торговое оборудование</p>
            <div className='photoGallery_images_container'>
                {PhotoGalleryConsts.PhotoGalleryTradeImages.map((imgUrl, idx) => (
                    <img className='photoGallery_image' src={imgUrl} alt='' key={idx} />
                ))}
            </div>
            
            <p className='PhotoGallery_mainSubTitle'>Металлоконструкции</p>
            <div className='photoGallery_images_container'>
                {PhotoGalleryConsts.MetalStructures.map((imgUrl, idx) => (
                    <img className='photoGallery_image' src={imgUrl} alt='' key={idx} />
                ))} 
            </div>
            
            <p className='PhotoGallery_mainSubTitle'>Быстровозводимые дома</p>
            <div className='photoGallery_images_container'>
                {PhotoGalleryConsts.PrefabricatedHouses.map((imgUrl, idx) => (
                    <img className='photoGallery_image' src={imgUrl} alt='' key={idx} />
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;