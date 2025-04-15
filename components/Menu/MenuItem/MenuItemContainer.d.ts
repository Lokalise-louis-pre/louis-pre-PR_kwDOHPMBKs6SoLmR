import { ForwardRefComponent } from '../../../utils/ts';
/**
 * Set default element for this component as "div". This is useful for cases when this component is used as a standalone component.
 * There could be a cases where it is nested inside a button element or a button element is nested in it -
 * in that cases there are DOM node validation errors. In case the user wants to turn it into accessible component it is possible to user "role" attribute */
export declare const MenuItemContainer: ForwardRefComponent<"div", "button" | "a" | "div", false, object>;
