"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface BuyModalContextValue {
    open: () => void;
    close: () => void;
    isOpen: boolean;
}

const BuyModalContext = createContext<BuyModalContextValue>({
    open: () => {},
    close: () => {},
    isOpen: false,
});

export function BuyModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const open  = useCallback(() => setIsOpen(true),  []);
    const close = useCallback(() => setIsOpen(false), []);

    return (
        <BuyModalContext.Provider value={{ open, close, isOpen }}>
            {children}
        </BuyModalContext.Provider>
    );
}

export function useBuyModal() {
    return useContext(BuyModalContext);
}
