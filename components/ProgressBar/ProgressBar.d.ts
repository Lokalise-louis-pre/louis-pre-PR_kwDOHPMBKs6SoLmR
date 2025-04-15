import { default as React } from '../../../node_modules/react';
export type ProgressBarProps = {
    /**
     * Sets the current progress indicator, between 0 and 100.
     */
    progress: number;
    /**
     * Controls the height of the bar.
     */
    height?: number;
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export declare const ProgressBar: {
    ({ progress, height, className }: ProgressBarProps): React.JSX.Element;
    displayName: string;
};
