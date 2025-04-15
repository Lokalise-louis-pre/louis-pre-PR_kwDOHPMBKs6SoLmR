import { default as React, CSSProperties, ReactNode } from '../../../node_modules/react';
type ModalSize = 'default' | 'wide';
type ModalSizeProps = {
    /**
     * Changes the modal max-width.
     */
    size?: ModalSize;
};
export type ModalProps = {
    /**
     * Toggles whether the modal is shown.
     */
    opened: boolean;
    /**
     * Renders text content as the title of the modal.
     */
    title?: string;
    /**
     * Sets css overflow.
     */
    overflow?: CSSProperties['overflow'];
    /**
     * Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.
     */
    inPortal?: boolean;
    /**
     * Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.
     */
    onClose: () => void;
    /**
     * Renders text content and / or any HTML node in the modal body.
     */
    children: ReactNode;
    /**
     * Sets the css class attribute.
     */
    className?: string;
} & ModalSizeProps;
export declare const Modal: ({ children, title, ...restProps }: ModalProps) => React.JSX.Element;
export {};
