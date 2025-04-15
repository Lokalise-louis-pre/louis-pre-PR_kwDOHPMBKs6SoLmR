import { ComponentPropsWithRef, ElementType, ForwardRefExoticComponent, JSX, ReactElement } from '../../../node_modules/react';
type EmptyObject = Record<string | number, never>;
type Cast<T> = (T & string) | (T & number);
export type CssValue = string | number;
export type ObjectType = Record<string | number, unknown>;
export type ScalarPaths<O extends ObjectType> = ScalarPathsHelper<O, never, ''>;
type ScalarPathsHelper<O extends ObjectType, Paths extends string, Prefix extends string> = EmptyObject extends O ? Paths : {
    [Key in keyof O]: O[Key] extends ObjectType ? ScalarPathsHelper<O[Key], Paths, `${Prefix}${Cast<Key>}.`> : O[Key] extends CssValue ? Paths | `${Prefix}${Cast<Key>}` : Paths;
}[keyof O];
export type ObjectPaths<O extends ObjectType> = ObjectPathsHelper<O, never, ''>;
type ObjectPathsHelper<O extends ObjectType, Paths extends string, Prefix extends string> = EmptyObject extends O ? Paths : {
    [Key in keyof O]: O[Key] extends ObjectType ? ObjectPathsHelper<O[Key], Paths | `${Prefix}${Cast<Key>}`, `${Prefix}${Cast<Key>}.`> : Paths;
}[keyof O];
export type Booleanish = boolean | 'true' | 'false';
export type EventKeys = 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'Enter' | 'Space' | 'Tab' | 'Backspace' | 'Control' | 'Meta' | 'Home' | 'End' | 'PageDown' | 'PageUp' | 'Delete' | 'Escape' | ' ' | 'Shift';
type Merge<P1 = object, P2 = object> = Omit<P1, keyof P2> & P2;
type MergeProps<E, P = object> = P & Merge<E extends ElementType ? ComponentPropsWithRef<E> : never, P>;
export interface ForwardRefComponent<IntrinsicElementString, LimitAs extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements, AllowComponentAs extends boolean = true, OwnProps = object> extends ForwardRefExoticComponent<MergeProps<IntrinsicElementString, OwnProps & {
    as?: IntrinsicElementString;
}>> {
    <As extends LimitAs>(props: MergeProps<As, OwnProps & {
        as: As;
    }>): ReactElement | null;
    <As extends ElementType<unknown>, _AsWithProps = As extends ElementType<infer P> ? ElementType<P> : never>(props: AllowComponentAs extends true ? MergeProps<_AsWithProps, OwnProps & {
        as: _AsWithProps;
    }> : never): ReactElement | null;
}
export {};
