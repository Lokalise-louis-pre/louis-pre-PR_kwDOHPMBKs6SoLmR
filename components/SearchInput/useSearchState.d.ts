import { PayloadAction } from 'use-local-slice';
type UseSearchStateInputProps = {
    initialValue: string;
    initialCaseSensitive: boolean;
    initialExactMatch: boolean;
};
export declare const useSearchState: ({ initialValue, initialCaseSensitive, initialExactMatch }: UseSearchStateInputProps) => [{
    value: string;
    caseSensitive: boolean;
    exactMatch: boolean;
    flush: boolean;
}, import('use-local-slice').DispatcherMap<{
    setValue: (state: import('immer/dist/internal').WritableDraft<{
        value: string;
        caseSensitive: boolean;
        exactMatch: boolean;
        flush: boolean;
    }>, { payload: { value, flush } }: PayloadAction<{
        value: string;
        flush?: boolean | undefined;
    }>) => void;
    setCaseSensitive: (state: import('immer/dist/internal').WritableDraft<{
        value: string;
        caseSensitive: boolean;
        exactMatch: boolean;
        flush: boolean;
    }>, { payload: { value } }: PayloadAction<{
        value: boolean;
    }>) => void;
    setExactMatch: (state: import('immer/dist/internal').WritableDraft<{
        value: string;
        caseSensitive: boolean;
        exactMatch: boolean;
        flush: boolean;
    }>, { payload: { value } }: PayloadAction<{
        value: boolean;
    }>) => void;
    toggleCaseSensitive: (state: import('immer/dist/internal').WritableDraft<{
        value: string;
        caseSensitive: boolean;
        exactMatch: boolean;
        flush: boolean;
    }>) => void;
    toggleExactMatch: (state: import('immer/dist/internal').WritableDraft<{
        value: string;
        caseSensitive: boolean;
        exactMatch: boolean;
        flush: boolean;
    }>) => void;
}>];
export {};
