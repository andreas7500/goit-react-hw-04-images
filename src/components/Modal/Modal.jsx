import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImage, tags, onModalClick }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onModalClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClick]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onModalClick();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick} className={style.Overlay}>
      <div className={style.Modal}>
        <img src={largeImage} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  tags: PropTypes.string,
  largeImage: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};
