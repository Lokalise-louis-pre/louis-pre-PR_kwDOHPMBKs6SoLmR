import { default as React, HTMLAttributes } from '../../../../node_modules/react';
export type MenuDrawerProps = {
    /**
     * Toggles full width rendering of the MenuDrawer.
     */
    fullWidth?: boolean;
} & HTMLAttributes<HTMLDivElement>;
export declare const MenuDrawer: {
    ({ fullWidth, className, ...restProps }: MenuDrawerProps): React.JSX.Element;
    displayName: string;
};
