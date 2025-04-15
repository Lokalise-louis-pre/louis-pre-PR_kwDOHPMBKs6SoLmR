interface UseDisclosureProps {
    opened?: boolean;
    defaultIsOpen?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
}
export declare const useDisclosure: (props?: UseDisclosureProps) => {
    opened: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
};
export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
export {};
