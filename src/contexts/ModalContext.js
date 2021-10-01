import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    function openModal () {
        setIsOpen(true);
    }

    function closeModal () {
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{ 
            isOpen,
            openModal,
            closeModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}