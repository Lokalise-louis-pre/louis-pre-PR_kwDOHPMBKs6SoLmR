import { HTMLAttributes, MutableRefObject, ReactNode, default as React } from '../../../node_modules/react';
export type TableProps = {
    /**
     * Renders text content and / or any HTML node.
     */
    children: ReactNode;
    /**
     * Forwards a ref to the table element.
     */
    ref?: MutableRefObject<HTMLTableElement>;
} & Omit<HTMLAttributes<HTMLTableElement>, 'children'>;
export declare const Table: {
    ({ className, ref, children, ...rest }: TableProps): React.JSX.Element;
    displayName: string;
};
