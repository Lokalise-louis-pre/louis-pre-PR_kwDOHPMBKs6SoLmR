import { default as React, ReactNode, RefObject } from '../../../../node_modules/react';
export declare const useIsOverflow: <T extends HTMLElement>(ref: React.RefObject<T | null>) => boolean;
export declare const ModalBody: ({ children, className }: {
    children: ReactNode;
    className?: string | undefined;
}) => React.JSX.Element;
