import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState(localStorage.getItem('userEmail'));
    const [newRequest, setNewRequest] = useState(false);

    function openModal () {
        setIsOpen(true);
    }

    function closeModal () {
        setIsOpen(false);
    }

    function setUserEmail (v) {
        localStorage.setItem('userEmail', v);
        setEmail(v);
    }

    function logout () {
        localStorage.removeItem('userEmail');
        setEmail('');
    }

    function setRequest() {
        setNewRequest(true);

        setTimeout(() => {
            setNewRequest(false);
        }, 100)
    }

    return (
        <ModalContext.Provider value={{ 
            isOpen,
            openModal,
            closeModal,
            email,
            setUserEmail,
            logout,
            newRequest,
            setRequest
        }}>
            {children}
        </ModalContext.Provider>
    )
}