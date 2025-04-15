import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Dropzone } from '.';
type Props = ComponentProps<typeof Dropzone>;
/**
 * Dropzone is used to allow users select or drop files to upload. The component provides a standardized wrapper around the
 * [React Dropzone](https://react-dropzone.js.org/) library. Dropzone component is almost a headless UI helper. It does not
 * provide any UI out of the box except for a `div` with dashed borders that changes color according to `isDragAccept` and `isDragReject`
 * state. It's up to the consumer to define the component look and feel using `children` render function that exposes dropzone
 * state.
 *
 * Dropzone exports:
 * - `Dropzone`: Main component
 * - `MimeTypes`: Object of all supported MIME types with file extension as a `key` and MIME type as `value`
 * - `ImageMimeType`: Array of all images MIME types
 * - `PdfMimeType`: PDF MIME type
 * - `MsWordMimeType`: Array of MS Word files MIME type
 * - `MsExcelMimeType`: Array of MS Excel files MIME type
 * - `CsvMimeType`: CSV MIME type
 *
 * [Figma Source File | Dropzone](https://www.figma.com/file/Wf4pR0TCW8VOyooxzpjXOU/Louis-Designer-Artifacts?type=design&node-id=7-18572&mode=design&t=fyipQ4zM85wvT7od-4)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const SingleFileSelection: Story;
export declare const MimeTypes: Story;
export declare const MaxSize: Story;
export declare const Disabled: Story;
