import React, { useState} from 'react';

import Modal from './components/Modal';
import Photogrid from '../../shared/components/Photogrid';

const Homepage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState('3');
  const [ isModalOpen, setIsModalOpen ] = useState(null);

  const handleClick = (e) => {
    setSelectedPhoto(e.target.name);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Photogrid handleClick={handleClick} />
      <Modal selectedPhoto={selectedPhoto} isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  )
}

export default Homepage
