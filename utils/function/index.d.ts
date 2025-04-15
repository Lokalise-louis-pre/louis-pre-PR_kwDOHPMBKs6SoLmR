type Fn = (...args: any[]) => any;
export declare const isFunction: (input: unknown) => input is Fn;
export declare const callAllHandlers: <T extends (event: any) => void>(...fns: (T | undefined)[]) => (event: Parameters<T>[0]) => void;
export {};
