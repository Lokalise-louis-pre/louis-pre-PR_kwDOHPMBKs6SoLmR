import { HTMLAttributes, MutableRefObject, default as React } from '../../../node_modules/react';
export type TableHeaderCellProps = {
    /**
     * Sets the width of the table data cell element.
     */
    width?: string;
    /**
     * Sets the colspan attribute on the table data cell element.
     */
    colSpan?: number;
    /**
     * Sets the text-align style for content in the table data cell element.
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Forwards a ref to the table header cell element.
     */
    ref?: MutableRefObject<HTMLTableCellElement>;
} & HTMLAttributes<HTMLTableCellElement>;
export declare const TableHeaderCell: {
    ({ children, width, align, colSpan, className, ref, ...rest }: TableHeaderCellProps): React.JSX.Element;
    displayName: string;
};
