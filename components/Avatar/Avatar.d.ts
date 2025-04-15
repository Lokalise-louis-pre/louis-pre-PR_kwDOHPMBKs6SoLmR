import { default as React } from '../../../node_modules/react';
export type AvatarProps = {
    /**
     * Sets the image source URL.
     */
    src: string;
    /**
     * Sets the image alt text.
     */
    alt: string;
    /**
     * Sets the height and width of the avatar.
     */
    size: number;
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export declare const Avatar: ({ size, alt, className, ...props }: AvatarProps) => React.JSX.Element;
