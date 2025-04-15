import { ReactNode, RefObject } from '../../../node_modules/react';
export type PortalProps = {
    /**
     * Renders text content and / or any HTML node.
     *
     */
    children: ReactNode;
    /**
     * The DOM element type to render, default 'div'.
     *
     */
    type?: string;
    /**
     * Container element where the Portal will render. If not set the
     * portal will be appended to the body of the component's owner document
     * (typically this is the `document.body`).
     */
    containerRef?: RefObject<HTMLElement | null>;
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export declare const Portal: {
    ({ children, containerRef, type, className }: PortalProps): import('../../../node_modules/react').ReactPortal | null;
    displayName: string;
};
