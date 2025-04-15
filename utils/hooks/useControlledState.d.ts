import { Dispatch, SetStateAction } from '../../../node_modules/react';
export declare function useControlledState<T>({ controlledValue, defaultValue, }: {
    controlledValue?: T;
    defaultValue: T | (() => T);
}): [T, Dispatch<SetStateAction<T>>];
