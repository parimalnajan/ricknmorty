import  { useState } from 'react'

  export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ({
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
        isOpen,
        })
    }

  export default useModal;