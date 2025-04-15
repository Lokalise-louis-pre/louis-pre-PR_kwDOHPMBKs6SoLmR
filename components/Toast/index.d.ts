import { ReactNode, default as React } from '../../../node_modules/react';
import { ToastClassName, Id as ToastifyId, ToastPosition } from 'react-toastify';
import { ToastAnchor } from './Anchor';
export type ToastType = 'success' | 'error' | 'warning' | 'info';
type ToastDescriptionFunctionParameters = {
    closeToast: (() => void) | undefined;
};
type DescriptionFn = (descriptionFnParams: ToastDescriptionFunctionParameters) => ReactNode;
type ToastProps = {
    /**
     * Changes the toast type.
     */
    type: ToastType;
    /**
     * Sets the toast title text.
     */
    title: string;
    /**
     * Renders text content and / or any HTML node in the toast.
     */
    description?: DescriptionFn | ReactNode;
    /**
     * Function executed when clicking inside the toast notification.
     */
    onClick?: () => void;
    /**
     * Delay in ms to close the toast. If set to false, the toast needs to be closed manually.
     */
    autoClose?: number | false;
    /**
     * Toggles the visibility of the close button in the toast.
     */
    closeVisible?: boolean;
    /**
     * Toggles whether the toast can be dragged.
     */
    draggable?: boolean;
    /**
     * Sets a custom id for the toast.
     */
    toastId?: ToastifyId;
    /**
     * Specify the container id when using multiple toast containers.
     */
    containerId?: ToastifyId;
};
declare const showToast: ({ type, title, description, onClick, autoClose, closeVisible, draggable, toastId, containerId, }: ToastProps) => ToastifyId;
declare const dismissToast: (toastId: ToastifyId) => void;
declare const isToastActive: (toastId: ToastifyId) => boolean;
declare const updateToast: (toastId: ToastifyId, { title, description, ...props }: Partial<ToastProps>) => void;
type ToastContainerProps = {
    /**
     * Enables multiple toast containers and sets the container id.
     */
    containerId?: ToastifyId;
    /**
     * Position in which to render the toasts.
     */
    position?: ToastPosition;
    /**
     * Sets the css class attribute.
     */
    className?: ToastClassName;
};
declare const ToastContainer: ({ containerId, position, className, }: ToastContainerProps) => React.JSX.Element;
export { ToastContainer, showToast, updateToast, dismissToast, isToastActive, ToastAnchor };
export type { ToastifyId, ToastProps, ToastContainerProps, ToastDescriptionFunctionParameters };
