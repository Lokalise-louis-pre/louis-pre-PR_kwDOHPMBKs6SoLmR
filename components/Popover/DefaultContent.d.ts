import { ClassAttributes, HTMLAttributes, RefAttributes, default as React } from '../../../node_modules/react';
export type ContentProps = HTMLAttributes<HTMLDivElement> & ClassAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>;
export declare const DefaultContent: React.ForwardRefExoticComponent<Omit<ContentProps, "ref"> & RefAttributes<HTMLDivElement>>;
