import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { ConfirmModalProps, DangerModalProps, Modal } from '.';
type ModalProps = ComponentProps<typeof Modal> & {
    inputValue?: string;
    dateValue?: Date | null;
};
/**
 * Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal is inert, meaning that users cannot interact with it.
 *
 * Modal exports 3 facade components that are used for common modal use cases:
 * - `Modal`: Opinionated facade component that provides reasonable defaults for most situations.
 * - `ConfirmModal`: Used to quickly create a confirmation modal with a primary confirm button and a secondary close button.
 * - `DangerModal`: Used to quickly create a danger modal with a primary danger button and a secondary close button.
 *
 * Modal exports 5 components to help you create any modal dialog:
 * - `ModalShell`: A modal with all the functionality but without header, close button, and paddings.
 * - `ModalCloseButton`: Button that closes the modal.
 * - `ModalHeader`: Component that wraps modal heading and close button.
 * - `ModalBody`: Wrapper for the content that adds spacing from the sides.
 * - `ModalFooter`: Wrapper that houses the modal actions. If used together with `ModalBody` it makes `ModalBody` scrollable.
 * - `ModalActions`: Wrapper that houses the modal actions.
 *
 * [Figma Source File | Modal](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A36149)
 */
declare const meta: Meta<ModalProps & ConfirmModalProps & DangerModalProps>;
export default meta;
type Story = StoryObj<ModalProps & ConfirmModalProps>;
export declare const Default: Story;
export declare const ConfirmModalStory: Story;
export declare const DangerModalStory: Story;
export declare const Scrollable: Story;
export declare const ScrollableDangerModal: Story;
