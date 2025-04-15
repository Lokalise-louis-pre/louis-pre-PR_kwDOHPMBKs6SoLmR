import { HTMLAttributes, MutableRefObject, ReactNode, default as React } from '../../../node_modules/react';
export type TableBodyProps = {
    /**
     * Renders text content and / or any HTML node.
     */
    children: ReactNode;
    /**
     * Forwards a ref to the table body element.
     */
    ref?: MutableRefObject<HTMLTableSectionElement>;
} & Omit<HTMLAttributes<HTMLTableSectionElement>, 'children'>;
export declare const TableBody: {
    ({ ref, children, ...rest }: TableBodyProps): React.JSX.Element;
    displayName: string;
};
