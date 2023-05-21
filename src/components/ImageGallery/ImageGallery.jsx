import PropTypes from 'prop-types';
import style from './imageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <>
      <ul className={style.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            largeImageURL={largeImageURL}
            tag={tags}
            openModal={onOpenModal}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
