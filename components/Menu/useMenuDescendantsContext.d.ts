export declare const MenuDescendantsProvider: import('../../../node_modules/react').Provider<import('./descendant').DescendantsManager<HTMLElement, Record<string, unknown>>>, useMenuDescendantsContext: () => import('./descendant').DescendantsManager<HTMLElement, Record<string, unknown>>, useMenuDescendants: () => import('./descendant').DescendantsManager<HTMLElement, Record<string, unknown>>, useMenuDescendant: (options?: import('./descendant').DescendantOptions<Record<string, unknown>> | undefined) => {
    descendants: import('./descendant').DescendantsManager<HTMLElement, Record<string, unknown>>;
    index: number;
    enabledIndex: number;
    register: (node: HTMLElement | null) => void;
};
