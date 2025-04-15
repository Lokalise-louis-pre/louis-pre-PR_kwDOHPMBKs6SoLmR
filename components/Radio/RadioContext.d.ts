import { ChangeEvent, ReactNode, default as React } from '../../../node_modules/react';
export type RadioContextProps = {
    /**
     * Renders `Radio` children as radio options.
     */
    children: ReactNode;
    /**
     * Sets the currently selected `Radio` option.
     */
    value?: string;
    /**
     * Sets the name attributes for the `Radio` options.
     */
    name: string;
    /**
     * Function executed when a `Radio` option is selected.
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
};
export declare const RadioContext: {
    ({ children, value: passedValue, name, onChange }: RadioContextProps): React.JSX.Element;
    displayName: string;
};
