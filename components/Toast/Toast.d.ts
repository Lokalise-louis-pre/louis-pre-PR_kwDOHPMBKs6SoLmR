import { default as React, ReactNode } from '../../../node_modules/react';
type ToastProps = {
    title: string;
    description?: ReactNode;
};
export declare const Toast: ({ title, description }: ToastProps) => React.JSX.Element;
export {};
