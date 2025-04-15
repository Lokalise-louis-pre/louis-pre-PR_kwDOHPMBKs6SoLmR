import { InputErrorMessage } from './InputErrorMessage';
type InputError = boolean | string | readonly string[] | undefined;
type InputErrorObject = {
    isInvalid: boolean;
    errorMessages: InputErrorMessage[];
};
export declare const useInputErrorMessages: (error: InputError) => InputErrorObject;
export {};
