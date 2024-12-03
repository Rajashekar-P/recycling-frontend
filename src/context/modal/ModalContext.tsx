"use client"

import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import dynamic from 'next/dynamic'
import React, { PropsWithChildren, ReactNode, Suspense, useContext, useState } from 'react'

const Backdrop = dynamic(() => import("@/components/modal/backdrop"), { ssr: false })

type ModalContextProps = {
    update: (modal: ReactNode) => void,
    open: (modal?: ReactNode) => void,
    close: () => void
}

const initial: ModalContextProps = {
    update: () => { },
    open: () => { },
    close: () => { },
}


const ModelContext = React.createContext<ModalContextProps>(initial);

function ModalContextProvider({ children }: PropsWithChildren)
{
    const [modal, setModal] = useState<ReactNode>()
    const [show, setShow] = useState(false);

    const open = (modal?: ReactNode) =>
    {
        if (modal) update(modal);
        setShow(true)
    }
    const close = () => { setShow(() => false) };
    const update = (modal: ReactNode) => setModal(() => modal);

    return (
        <ModelContext.Provider value={{ update, close: close, open }}>
            <AnimatePresence>
                {
                    show &&
                    <LazyMotion features={domAnimation}>
                        <Suspense>
                            <Backdrop closeCallback={close} shouldAllowClickClose>
                                {modal}
                            </Backdrop>
                        </Suspense>
                    </LazyMotion>
                }
            </AnimatePresence>
            {children}
        </ModelContext.Provider>
    )
}

export function useModalContext()
{
    return useContext(ModelContext)
}

export default ModalContextProvider