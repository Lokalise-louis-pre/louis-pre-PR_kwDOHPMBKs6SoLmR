import { DragEventHandler, JSX } from '../../../node_modules/react';
import { DropEvent, DropzoneState, FileRejection } from 'react-dropzone';
export type DropzoneProps = {
    /**
     * Dropzone UI
     */
    children: (state: DropzoneState) => JSX.Element;
    /**
     * Callback event on file(s) select/drop
     */
    onDrop?: <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void;
    /**
     * Drag enter event handler
     */
    onDragEnter?: DragEventHandler;
    /**
     * Drag over event handler
     */
    onDragOver?: DragEventHandler;
    /**
     * Drag over event handler
     */
    onDragLeave?: DragEventHandler;
    /**
     * Allow multiple files for select/drop
     */
    multiple?: boolean;
    /**
     * Array of mimetypes allowed for select/drop events. If not specified, all file types will be accepted.
     */
    accept?: string[];
    /**
     * Maximum file size (in bytes)
     */
    maxSize?: number;
    /**
     * Name attribute for file input field.
     */
    name?: string;
    /**
     * Disables clicks and drags on the dropzone.
     */
    disabled?: boolean;
};
export declare const Dropzone: ({ children, onDrop, onDragEnter, onDragOver, onDragLeave, disabled, multiple, accept, maxSize, name, }: DropzoneProps) => JSX.Element;
