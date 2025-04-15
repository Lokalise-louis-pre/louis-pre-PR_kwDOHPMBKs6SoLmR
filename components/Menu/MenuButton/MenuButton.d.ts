import { ReactElement, RefObject } from '../../../../node_modules/react';
type MenuButtonChildrenComponent = ReactElement<any> & {
    ref?: RefObject<unknown>;
};
interface MenuButtonProps {
    children: MenuButtonChildrenComponent | ((arg: {
        opened: boolean;
    }) => MenuButtonChildrenComponent);
}
export declare const MenuButton: ({ children }: MenuButtonProps) => ReactElement<any, string | import('../../../../node_modules/react').JSXElementConstructor<any>>;
export {};
