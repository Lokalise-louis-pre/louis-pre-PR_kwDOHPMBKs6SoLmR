import { default as React } from '../../../node_modules/react';
type DeprecatedMessages = string | readonly string[] | null;
export type InputErrorMessage = {
    message: string;
    id: string;
};
export type InputErrorMessageProps = {
    children: DeprecatedMessages;
    /**
     * @deprecated in favor of error message objects
     */
    id: string;
    className?: string;
} | {
    /**
     * **Deprecated**: Should not provide `id` when providing error message objects
     */
    id?: never;
    /**
     * One or more error message objects with error text to render and ID.
     */
    children: InputErrorMessage[];
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export declare const InputErrorMessage: ({ children, id, className }: InputErrorMessageProps) => React.JSX.Element | null;
export {};
