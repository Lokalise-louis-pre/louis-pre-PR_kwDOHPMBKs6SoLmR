import { HTMLAttributes, ReactNode, default as React } from '../../../node_modules/react';
import { IconButtonProps } from '../IconButton';
export type AlertStatus = 'success' | 'info' | 'warning' | 'error' | 'ai';
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
    /**
     * Changes the alert background color.
     */
    status?: AlertStatus;
    /**
     * Function to close the alert. When a function is passed the component will render a close button.
     */
    onClose?: () => void;
    /**
     * Renders text content and / or any HTML node in the alert.
     */
    children?: ReactNode;
    /**
     * Renders an icon on the left side of the alert.
     */
    withStartAdornmentIcon?: boolean;
    /**
     * Custom icon to be rendered instead of predefined adornment icon on left side of Alert.
     */
    customAdornmentIcon?: ReactNode;
    className?: string;
    iconButtonProps?: Pick<IconButtonProps, 'tooltipInPortal' | 'tooltipPlacement'>;
}
export declare const Alert: ({ status, onClose, children, withStartAdornmentIcon, customAdornmentIcon, className, iconButtonProps, ...props }: AlertProps) => React.JSX.Element;
