import { AnchorHTMLAttributes, ButtonHTMLAttributes, default as React } from '../../../node_modules/react';
type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href'> & {
    href?: undefined;
};
type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    /**
     * Enables component as an HTML Anchor Element.
     */
    href: string;
    disabled?: boolean;
};
export type PressableProps = ButtonProps | AnchorProps;
export type PressableElement = HTMLButtonElement | HTMLAnchorElement;
export declare const Pressable: React.ForwardRefExoticComponent<PressableProps & React.RefAttributes<PressableElement>>;
export {};
