import { default as React, InputHTMLAttributes } from '../../../node_modules/react';
export type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;
/**
 * @deprecated Toggle component is deprecated. Use [Switch](https://lokalise.github.io/louis/?path=/docs/components-forms-switch--docs) instead.
 * A toggle switch component that allows users to switch between two states.
 */
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;
