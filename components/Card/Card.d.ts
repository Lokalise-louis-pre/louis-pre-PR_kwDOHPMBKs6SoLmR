import { default as React, HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type CardProps = {
    /**
     * The container element it should render.
     */
    as?: 'div' | 'li' | 'section' | 'article' | 'main' | 'aside';
    /**
     * Renders Card's content.
     */
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;
export declare const Card: {
    ({ as: Container, className, ...restProps }: CardProps): React.JSX.Element;
    displayName: string;
};
