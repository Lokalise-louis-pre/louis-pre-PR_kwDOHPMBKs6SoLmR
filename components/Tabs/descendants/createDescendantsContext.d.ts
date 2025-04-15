type SomeElement<T> = T extends Element ? T : HTMLElement;
export type Descendant<ElementType = HTMLElement> = {
    element: SomeElement<ElementType> | null;
    index: number;
};
export interface DescendantContextValue<DescendantType extends Descendant> {
    descendants: DescendantType[];
    registerDescendant: (descendant: DescendantType) => () => void;
}
export declare const createDescendantContext: <DescendantType extends Descendant<HTMLElement>>(name: string, initialValue?: {}) => import('../../../../node_modules/react').Context<DescendantContextValue<DescendantType>>;
export {};
