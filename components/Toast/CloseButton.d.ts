import { default as React } from '../../../node_modules/react';
type CloseButtonProps = {
    closeToast: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
export declare const CloseButton: ({ closeToast }: CloseButtonProps) => React.JSX.Element;
export {};
