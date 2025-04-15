import { ReactElement, default as React } from '../../../node_modules/react';
import { ViewButtonProps } from './ViewButton';
export interface ViewButtonGroupProps<T extends string> {
    /**
     * Function passed down to ViewButton children and executed when a button is clicked.
     */
    onChange: (value: T) => void;
    /**
     * Sets the currently selected ViewButton.
     */
    value: T;
    /**
     * Renders 2 or more ViewButtons.
     */
    children: ReactElement<ViewButtonProps<T>>[];
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const ViewButtonGroup: <T extends string>({ onChange, value, children: childrenProp, className, }: ViewButtonGroupProps<T>) => React.JSX.Element;
