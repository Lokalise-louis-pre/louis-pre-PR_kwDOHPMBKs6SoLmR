import { HTMLAttributes, MutableRefObject, ReactNode, default as React } from '../../../node_modules/react';
export type TableRowProps = {
    /**
     * Renders text content and / or any HTML node.
     */
    children: ReactNode;
    /**
     * Forwards a ref to the table row element.
     */
    ref?: MutableRefObject<HTMLTableRowElement>;
} & Omit<HTMLAttributes<HTMLTableRowElement>, 'children'>;
export declare const TableRow: {
    ({ ref, children, ...rest }: TableRowProps): React.JSX.Element;
    displayName: string;
};
