import { default as React } from '../../../node_modules/react';
import { InputProps } from '../Input';
export type SearchInputMeta = {
    caseSensitive: boolean;
    exactMatch: boolean;
};
export type SearchInputProps = Omit<InputProps, 'value' | 'prefix' | 'onValueChange'> & {
    /**
     * Toggles the loading icon in the search field.
     */
    loading?: boolean;
    /**
     * Toggles the "case sensitive" button in the search field.
     */
    toggleCaseSensitive?: boolean;
    /**
     * Toggles the "exact match" button in the search field.
     */
    toggleExactMatch?: boolean;
    /**
     * Toggles "case sensitive" in the metadata argument of the search query.
     */
    caseSensitive?: boolean;
    /**
     * Toggles "exact match" in the metadata argument of the search query.
     */
    exactMatch?: boolean;
    /**
     * Sets a prefilled value in the search field.
     */
    value?: string;
    /**
     * Sets the time in milliseconds to wait before executing `onValueChange`.
     */
    debounceTime?: number;
    /**
     * Function executed when search input changes: search value as first argument, search metadata object as second argument.
     */
    onValueChange?: (value: string, meta: SearchInputMeta) => void;
};
export declare const SearchInput: React.ForwardRefExoticComponent<Omit<InputProps, "prefix" | "value" | "onValueChange"> & {
    /**
     * Toggles the loading icon in the search field.
     */
    loading?: boolean | undefined;
    /**
     * Toggles the "case sensitive" button in the search field.
     */
    toggleCaseSensitive?: boolean | undefined;
    /**
     * Toggles the "exact match" button in the search field.
     */
    toggleExactMatch?: boolean | undefined;
    /**
     * Toggles "case sensitive" in the metadata argument of the search query.
     */
    caseSensitive?: boolean | undefined;
    /**
     * Toggles "exact match" in the metadata argument of the search query.
     */
    exactMatch?: boolean | undefined;
    /**
     * Sets a prefilled value in the search field.
     */
    value?: string | undefined;
    /**
     * Sets the time in milliseconds to wait before executing `onValueChange`.
     */
    debounceTime?: number | undefined;
    /**
     * Function executed when search input changes: search value as first argument, search metadata object as second argument.
     */
    onValueChange?: ((value: string, meta: SearchInputMeta) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>>;
