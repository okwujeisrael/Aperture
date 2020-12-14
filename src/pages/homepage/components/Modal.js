import React from 'react'

const Modal = ({ selectedPhoto, isModalOpen, closeModal }) => {

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black modal-background flex items-center justify-center animate__animated animate__flipInX cursor-pointer" onClick={closeModal}>
          <img src={`/homepage/${selectedPhoto}.jpg`} alt={selectedPhoto} className="z-30" />
        </div>
      )}
    </>
  )
}

export default Modal;
