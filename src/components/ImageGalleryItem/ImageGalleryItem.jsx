import PropTypes from 'prop-types';
import style from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, tags, openModal, largeImageURL }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItem_image}
        src={url}
        alt={tags}
        onClick={() => openModal(largeImageURL, tags)}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
