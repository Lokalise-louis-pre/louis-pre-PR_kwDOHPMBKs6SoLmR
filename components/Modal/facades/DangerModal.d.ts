import { default as React } from '../../../../node_modules/react';
import { ModalProps } from '../Modal';
export type DangerModalProps = ModalProps & {
    /**
     * Renders text content in the confirm button.
     */
    confirmText: string;
    /**
     * Renders text content in the close button.
     */
    closeText?: string;
    /**
     * Toggles the loading state for the confirm button.
     */
    loading?: boolean;
    /**
     * Renders a tooltip on the confirm button when passed.
     */
    tooltipTitle?: string;
    /**
     * Function executed when the confirm button is clicked.
     */
    onConfirm: () => void;
};
export declare const DangerModal: ({ children, confirmText, closeText, loading, title, tooltipTitle, onClose, onConfirm, ...restProps }: DangerModalProps) => React.JSX.Element;
