import { default as React } from '../../../node_modules/react';
export interface TagProps {
    /**
     * Renders text inside the Tag. Only string and array of strings are allowed because content like `<Tag>{`one`}{`two`}</Tag>` is passed
     * as an array of strings `['one', 'two']`. It is still valid case which is concatenated within the component.
     */
    children: string | string[];
    /**
     * Enables the outline style for the tag.
     */
    variant?: 'solid' | 'outlined';
    /**
     * Tag color can be set to any color. In case color is not provided color will be generated based on the passed text.
     */
    color?: string;
    /**
     * Sets tag size.
     */
    size?: 'default' | 'small';
    /**
     * Function that is executed when clicking on a Tag. Providing this will imply that tag should be a button.
     */
    onClick?: () => void;
    /**
     * Makes Tag span 100% of the container width.
     */
    fullWidth?: boolean;
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const Tag: ({ children, variant, color, size, fullWidth, onClick, className, }: TagProps) => React.JSX.Element;
