import { HTMLAttributes, MutableRefObject, ReactNode, default as React } from '../../../node_modules/react';
export type TableFooterProps = {
    /**
     * Renders text content and / or any HTML node.
     */
    children: ReactNode;
    /**
     * Forwards a ref to the table footer element.
     */
    ref?: MutableRefObject<HTMLTableSectionElement>;
} & Omit<HTMLAttributes<HTMLTableSectionElement>, 'children'>;
export declare const TableFooter: {
    ({ ref, children, ...rest }: TableFooterProps): React.JSX.Element;
    displayName: string;
};
