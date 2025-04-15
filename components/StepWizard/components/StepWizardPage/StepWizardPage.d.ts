import { ReactElement, ReactNode, default as React } from '../../../../../node_modules/react';
export type StepWizardPageProps = {
    /**
     * Render Step's content.
     */
    children: ReactNode | ReactNode[];
    /**
     * The name of the page displayed in the navigation bar.
     */
    label: string;
    /**
     * Allows navigating to the next page.
     */
    valid?: boolean;
    /**
     * Shows a loading spinner on the "Next" or "Submit" button.
     */
    loading?: boolean;
    /**
     * A callback executed before the user leaves this page.
     *
     * @deprecated use `onBeforePageChange` instead
     */
    onPageSave?: (movingToPage: number) => void;
    /**
     * A callback to execute before the user leaves this page.
     * Can be used to prevent page transition.
     *
     * @returns An optional Promise, which resolves to an optional boolean.
     * If the boolean is `false` then the page transition is prevented.
     * All other results will allow the page to transition as normal.
     *
     * @example
     * ```ts
     * myPage.onBeforePageChange = () => getPageErrors()
     * 	.then(errors => errors.length === 0);
     * ```
     */
    onBeforePageChange?: (pageInfo: {
        currentPage: number;
        targetPage: number;
    }) => Promise<boolean | void> | boolean | void;
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export type StepWizardPageData = {
    label: string;
    valid: boolean;
    loading: boolean;
    onPageSave?: (movingToPage: number) => void;
    onBeforePageChange?: (pageInfo: {
        currentPage: number;
        targetPage: number;
    }) => Promise<boolean | void> | boolean | void;
    element: ReactElement<StepWizardPageProps>;
};
export declare const StepWizardPage: {
    ({ children, className }: StepWizardPageProps): React.JSX.Element;
    displayName: string;
};
