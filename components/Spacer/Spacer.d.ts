import { ReactNode, default as React } from '../../../node_modules/react';
import { SpacingLevels } from '../../foundations/designTokens';
export type SpacerProps = {
    /**
     * Padding space from the top using theme spacing.
     */
    top?: SpacingLevels;
    /**
     * Padding space from the right using theme spacing.
     */
    right?: SpacingLevels;
    /**
     * Padding space from the bottom using theme spacing.
     */
    bottom?: SpacingLevels;
    /**
     * Padding space from the left using theme spacing.
     */
    left?: SpacingLevels;
    /**
     * Padding space from top and bottom using theme spacing.
     */
    vertical?: SpacingLevels;
    /**
     * Padding space from left and right using theme spacing.
     */
    horizontal?: SpacingLevels;
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export declare const Spacer: {
    ({ children, vertical, horizontal, top, right, bottom, left, className, ...rest }: SpacerProps): React.JSX.Element;
    displayName: string;
};
