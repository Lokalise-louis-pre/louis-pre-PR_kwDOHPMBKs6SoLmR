import { default as React } from '../../../../../node_modules/react';
import { StepWizardPageData } from '../StepWizardPage';
export type HorizontalPageCounterProps = {
    currentPageIndex: number;
    onNavigateToPage: (index: number) => void;
    pages: StepWizardPageData[];
};
export declare const HorizontalPageCounter: {
    ({ currentPageIndex, onNavigateToPage, pages }: HorizontalPageCounterProps): React.JSX.Element;
    displayName: string;
};
