type TokenEntry = {
    key: string;
    tokenValue: string;
};
type TokenObject = {
    [key: string]: TokenObject | string;
};
export declare const getTokenEntries: (tokenObject: TokenObject) => TokenEntry[];
export {};
