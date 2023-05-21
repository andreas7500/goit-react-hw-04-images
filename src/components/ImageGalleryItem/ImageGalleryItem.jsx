import PropTypes from 'prop-types';
import style from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, tag, openModal, largeImageURL }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItem_image}
        src={url}
        alt={tag}
        onClick={() => openModal(largeImageURL, tag)}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
