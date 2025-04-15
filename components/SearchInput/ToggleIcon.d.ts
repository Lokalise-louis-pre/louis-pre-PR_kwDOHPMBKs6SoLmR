import { ButtonHTMLAttributes, ReactNode, default as React } from '../../../node_modules/react';
export declare const ToggleIcon: React.ForwardRefExoticComponent<{
    label: string;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    onToggle: () => void;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
