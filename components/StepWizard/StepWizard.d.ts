import { ReactElement, default as React } from '../../../node_modules/react';
import { StepWizardPageProps } from './components/StepWizardPage';
export type StepWizardProps = {
    /**
     * Tooltip displayed on the "Next" or "Submit" button.
     */
    confirmTooltip?: string;
    /**
     * Text displayed on the final submit button on the last page.
     */
    submitText: string;
    /**
     * The callback executed when the user presses the submit button.
     */
    onSubmit: () => void;
    /**
     * Sets the css class attribute.
     */
    className?: string;
    /**
     * Accept StepWizardPage as children.
     */
    children: (ReactElement<StepWizardPageProps> | boolean)[];
};
export declare const StepWizard: {
    ({ confirmTooltip, submitText, onSubmit, className, children }: StepWizardProps): React.JSX.Element;
    displayName: string;
};
