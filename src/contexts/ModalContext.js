import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    function openModal () {
        setIsOpen(true);
    }

    return (
        <ModalContext.Provider value={{ 
            isOpen,
            openModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}