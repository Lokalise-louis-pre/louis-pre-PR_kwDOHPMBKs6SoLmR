import { ChangeEvent } from '../../../node_modules/react';
export type ContextValue = {
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
};
export declare const Context: import('../../../node_modules/react').Context<ContextValue>;
export declare const Consumer: import('../../../node_modules/react').Consumer<ContextValue>;
export declare const Provider: import('../../../node_modules/react').Provider<ContextValue>;
