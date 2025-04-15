import { RenderOptions } from '@testing-library/react';
import { ReactElement } from '../../../node_modules/react';
declare const customRender: (ui: ReactElement, options?: RenderOptions) => import('@testing-library/react').RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
export declare const waitForPosition: () => Promise<void>;
