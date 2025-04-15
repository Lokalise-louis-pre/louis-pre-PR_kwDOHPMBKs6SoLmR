import { default as React } from '../../../node_modules/react';
export type PageSize = 25 | 50 | 100;
export type PaginationProps = {
    /**
     * Sets the maximum number of items to display per page.
     */
    limit: PageSize;
    /**
     * Sets the current item offset, used to calculate which page should be displayed, can be a number ≥0 and <`total`.
     */
    offset: number;
    /**
     * Sets the total number of items.
     */
    total: number;
    /**
     * Function executed when changing pages or changing the number of items displayed per page.
     */
    onPaginationChange: (pageData: [pageNo: number, limit: PageSize, offset: number]) => void;
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export type PaginationInfo = Omit<PaginationProps, 'onPaginationChange'>;
export declare const Pagination: {
    ({ limit, offset, total, onPaginationChange, className }: PaginationProps): React.JSX.Element;
    displayName: string;
};
