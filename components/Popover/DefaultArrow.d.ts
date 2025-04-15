import { Placement } from '@floating-ui/react';
import { HTMLAttributes, RefAttributes, default as React } from '../../../node_modules/react';
export type ArrowProps = {
    placement: Placement;
} & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>;
export declare const DefaultArrow: React.ForwardRefExoticComponent<Omit<ArrowProps, "ref"> & RefAttributes<HTMLDivElement>>;
