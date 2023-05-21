import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchImages, needValues } from '../service/fetchImages';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setlargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    const renderGallery = async () => {
      setIsLoading(true);

      try {
        const { hits, totalHits } = await fetchImages(searchQuery, page);

        if (totalHits === 0) {
          toast.warn(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        const newImages = needValues(hits);

        setImages(prevImages => [...prevImages, ...newImages]);
        setTotalHits(totalHits);
      } catch (error) {
        setError(error);
        toast.error('Oops... Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery || page > 1) {
      renderGallery();
    }
  }, [error, searchQuery, page]);

  const onFormSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (url, tags) => {
    toggleModal();
    setShowModal(true);
    setlargeImageURL(url);
    setTags(tags);
  };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const toggleModal = () => {
    setShowModal(showModal => ({
      showModal: !showModal,
    }));
    setShowModal(false);
  };

  const allImages = images.length === totalHits;

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />
      <ToastContainer autoClose={3000} />
      <ImageGallery images={images} onOpenModal={openModal} />
      {isLoading && <Loader />}
      {images.length !== 0 && !isLoading && !allImages && (
        <Button onClick={onLoadMore} />
      )}
      {showModal && (
        <Modal
          onModalClick={toggleModal}
          largeImage={largeImageURL}
          alt={tags}
        />
      )}
    </>
  );
};
