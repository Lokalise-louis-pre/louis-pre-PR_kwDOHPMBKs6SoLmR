import { Browser, Locator, Page } from './browser';
export * from './snapshots';
export declare const setup: () => {
    page: () => Page;
    pause: () => Promise<void>;
    sleep: (ms: number) => Promise<void>;
    browser: () => Browser;
    openComponentById: (id: string, props?: Record<string, string | boolean | number | undefined>) => Promise<import('playwright-core').Response | null>;
    root: () => Locator;
    byText: (text: string | RegExp, options?: {
        exact?: boolean | undefined;
    } | undefined) => Locator;
    byLabel: (text: string | RegExp, options?: {
        exact?: boolean | undefined;
    } | undefined) => Locator;
    byRole: (role: "search" | "link" | "none" | "button" | "checkbox" | "listbox" | "meter" | "radio" | "region" | "cell" | "grid" | "table" | "row" | "caption" | "menu" | "listitem" | "menubar" | "menuitem" | "progressbar" | "separator" | "tab" | "tabpanel" | "toolbar" | "tooltip" | "treeitem" | "scrollbar" | "img" | "alert" | "alertdialog" | "application" | "article" | "banner" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "gridcell" | "group" | "heading" | "list" | "log" | "main" | "marquee" | "math" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "note" | "option" | "presentation" | "radiogroup" | "rowgroup" | "rowheader" | "searchbox" | "slider" | "spinbutton" | "status" | "switch" | "tablist" | "term" | "textbox" | "timer" | "tree" | "treegrid" | "blockquote" | "code" | "strong" | "time" | "deletion" | "emphasis" | "generic" | "insertion" | "paragraph" | "subscript" | "superscript", options?: {
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        exact?: boolean | undefined;
        expanded?: boolean | undefined;
        includeHidden?: boolean | undefined;
        level?: number | undefined;
        name?: string | RegExp | undefined;
        pressed?: boolean | undefined;
        selected?: boolean | undefined;
    } | undefined) => Locator;
    locate: (selectorOrLocator: string | Locator, selector?: string) => Locator;
};
