export type Themes = 'themeLokaliseLight' | 'themeLokaliseDark' | 'themeAutopilotLight';
export declare const themeMap: {
    themeLokaliseLight: {
        zIndex: {
            hide: number;
            auto: string;
            dropdown: number;
            tooltip: number;
            loadingOverlay: number;
            supportOverlays: number;
            dropdownInPortal: number;
            modal: number;
            popover: number;
            toast: number;
        };
        font: {
            family: {
                default: string;
                graphik: string;
                inter: string;
                heading: string;
                mono: string;
            };
            weight: {
                regular: string;
                strong: string;
            };
            size: {
                heading1: string;
                heading2: string;
                heading3: string;
                heading4: string;
                default: string;
                small: string;
                caption: string;
                tiny: string;
            };
            "line-height": {
                heading1: string;
                heading2: string;
                heading3: string;
                heading4: string;
                default: string;
                small: string;
                caption: string;
            };
            decoration: {
                underline: string;
            };
        };
        motion: {
            standard: string;
            in: string;
            out: string;
            bounce: string;
            speed: {
                "1": string;
                "2": string;
                "3": string;
                "4": string;
                "5": string;
            };
        };
        radius: {
            s: string;
            m: string;
            l: string;
            xl: string;
            rounded: string;
            input: string;
            notification: string;
            button: {
                default: string;
                small: string;
            };
            iconbutton: string;
            card: string;
            tooltip: string;
            tag: string;
            status: string;
            modal: string;
            dropdown: string;
        };
        size: {
            height: {
                input: {
                    default: string;
                    small: string;
                };
                button: {
                    large: string;
                    default: string;
                    small: string;
                    "extra-small": string;
                };
                iconbutton: {
                    large: string;
                    default: string;
                    small: string;
                    "extra-small": string;
                };
            };
            border: {
                button: {
                    default: string;
                };
            };
        };
        spacing: string[];
        transition: {
            default: string;
        };
        typography: {
            heading: {
                "1": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "2": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "3": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "4": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
            };
            body: {
                base: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                small: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                caption: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                tiny: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                link: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                    small: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                    caption: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                };
                action: {
                    base: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    small: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
            };
        };
        color: {
            text: {
                brand: {
                    primary: string;
                };
                default: string;
                inverse: string;
                light: {
                    default: string;
                    inverse: string;
                };
                disabled: string;
                link: {
                    default: string;
                    hover: string;
                };
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                input: {
                    placeholder: string;
                };
                action: {
                    primary: string;
                    danger: string;
                    alt: {
                        primary: string;
                        danger: string;
                    };
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            border: {
                default: string;
                light: string;
                disabled: string;
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                input: {
                    default: string;
                    hover: string;
                    readonly: string;
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            background: {
                transparent: string;
                surface: {
                    default: string;
                    inverse: string;
                    middle: string;
                    fore: string;
                };
                default: string;
                disabled: string;
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                mask: string;
                input: {
                    default: string;
                    readonly: string;
                };
                toggle: {
                    default: string;
                    active: string;
                };
                switch: {
                    default: string;
                    active: string;
                    disabled: string;
                    error: string;
                    marker: {
                        default: string;
                        active: string;
                        error: string;
                    };
                    control: {
                        default: string;
                        disabled: string;
                    };
                };
                progress: {
                    default: string;
                    active: {
                        default: string;
                        light: string;
                    };
                };
                action: {
                    primary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    secondary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    tertiary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    danger: {
                        default: string;
                        hover: string;
                        pressed: string;
                        light: {
                            default: string;
                            hover: string;
                            pressed: string;
                        };
                    };
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            status: {
                background: {
                    translating: string;
                    review: string;
                    completed: string;
                    error: string;
                    ready: string;
                    processing: string;
                    published: string;
                };
                text: {
                    translating: string;
                    review: string;
                    completed: string;
                    error: string;
                    ready: string;
                    processing: string;
                    published: string;
                };
            };
        };
        elevation: {
            layer1: string;
            layer2: string;
            layer3: string;
            focus: string;
        };
        mode: string;
    };
    themeLokaliseDark: {
        zIndex: {
            hide: number;
            auto: string;
            dropdown: number;
            tooltip: number;
            loadingOverlay: number;
            supportOverlays: number;
            dropdownInPortal: number;
            modal: number;
            popover: number;
            toast: number;
        };
        font: {
            family: {
                default: string;
                graphik: string;
                inter: string;
                heading: string;
                mono: string;
            };
            weight: {
                regular: string;
                strong: string;
            };
            size: {
                heading1: string;
                heading2: string;
                heading3: string;
                heading4: string;
                default: string;
                small: string;
                caption: string;
                tiny: string;
            };
            "line-height": {
                heading1: string;
                heading2: string;
                heading3: string;
                heading4: string;
                default: string;
                small: string;
                caption: string;
            };
            decoration: {
                underline: string;
            };
        };
        motion: {
            standard: string;
            in: string;
            out: string;
            bounce: string;
            speed: {
                "1": string;
                "2": string;
                "3": string;
                "4": string;
                "5": string;
            };
        };
        radius: {
            s: string;
            m: string;
            l: string;
            xl: string;
            rounded: string;
            input: string;
            notification: string;
            button: {
                default: string;
                small: string;
            };
            iconbutton: string;
            card: string;
            tooltip: string;
            tag: string;
            status: string;
            modal: string;
            dropdown: string;
        };
        size: {
            height: {
                input: {
                    default: string;
                    small: string;
                };
                button: {
                    large: string;
                    default: string;
                    small: string;
                    "extra-small": string;
                };
                iconbutton: {
                    large: string;
                    default: string;
                    small: string;
                    "extra-small": string;
                };
            };
            border: {
                button: {
                    default: string;
                };
            };
        };
        spacing: string[];
        transition: {
            default: string;
        };
        typography: {
            heading: {
                "1": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "2": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "3": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "4": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
            };
            body: {
                base: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                small: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                caption: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                tiny: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                link: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                    small: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                    caption: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                };
                action: {
                    base: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    small: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
            };
        };
        color: {
            text: {
                brand: {
                    primary: string;
                };
                default: string;
                inverse: string;
                light: {
                    default: string;
                    inverse: string;
                };
                disabled: string;
                link: {
                    default: string;
                    hover: string;
                };
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                input: {
                    placeholder: string;
                };
                action: {
                    primary: string;
                    danger: string;
                    alt: {
                        primary: string;
                        danger: string;
                    };
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            border: {
                default: string;
                light: string;
                disabled: string;
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                input: {
                    default: string;
                    hover: string;
                    readonly: string;
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            background: {
                transparent: string;
                surface: {
                    default: string;
                    inverse: string;
                    middle: string;
                    fore: string;
                };
                default: string;
                disabled: string;
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                mask: string;
                input: {
                    default: string;
                    readonly: string;
                };
                toggle: {
                    default: string;
                    active: string;
                };
                switch: {
                    default: string;
                    active: string;
                    disabled: string;
                    error: string;
                    marker: {
                        default: string;
                        active: string;
                        error: string;
                    };
                    control: {
                        default: string;
                        disabled: string;
                    };
                };
                progress: {
                    default: string;
                    active: {
                        default: string;
                        light: string;
                    };
                };
                action: {
                    primary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    secondary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    tertiary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    danger: {
                        default: string;
                        hover: string;
                        pressed: string;
                        light: {
                            default: string;
                            hover: string;
                            pressed: string;
                        };
                    };
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            status: {
                background: {
                    translating: string;
                    review: string;
                    completed: string;
                    error: string;
                    ready: string;
                    processing: string;
                    published: string;
                };
                text: {
                    translating: string;
                    review: string;
                    completed: string;
                    error: string;
                    ready: string;
                    processing: string;
                    published: string;
                };
            };
        };
        elevation: {
            layer1: string;
            layer2: string;
            layer3: string;
            focus: string;
        };
        mode: string;
    };
    themeAutopilotLight: {
        zIndex: {
            hide: number;
            auto: string;
            dropdown: number;
            tooltip: number;
            loadingOverlay: number;
            supportOverlays: number;
            dropdownInPortal: number;
            modal: number;
            popover: number;
            toast: number;
        };
        font: {
            family: {
                default: string;
                graphik: string;
                inter: string;
                heading: string;
                mono: string;
            };
            weight: {
                regular: string;
                strong: string;
            };
            size: {
                heading1: string;
                heading2: string;
                heading3: string;
                heading4: string;
                default: string;
                small: string;
                caption: string;
                tiny: string;
            };
            "line-height": {
                heading1: string;
                heading2: string;
                heading3: string;
                heading4: string;
                default: string;
                small: string;
                caption: string;
            };
            decoration: {
                underline: string;
            };
        };
        motion: {
            standard: string;
            in: string;
            out: string;
            bounce: string;
            speed: {
                "1": string;
                "2": string;
                "3": string;
                "4": string;
                "5": string;
            };
        };
        radius: {
            s: string;
            m: string;
            l: string;
            xl: string;
            rounded: string;
            input: string;
            notification: string;
            button: {
                default: string;
                small: string;
            };
            iconbutton: string;
            card: string;
            tooltip: string;
            tag: string;
            status: string;
            modal: string;
            dropdown: string;
        };
        size: {
            height: {
                input: {
                    default: string;
                    small: string;
                };
                button: {
                    large: string;
                    default: string;
                    small: string;
                    "extra-small": string;
                };
                iconbutton: {
                    large: string;
                    default: string;
                    small: string;
                    "extra-small": string;
                };
            };
            border: {
                button: {
                    default: string;
                };
            };
        };
        spacing: string[];
        transition: {
            default: string;
        };
        typography: {
            heading: {
                "1": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "2": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "3": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
                "4": {
                    fontFamily: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                };
            };
            body: {
                base: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                small: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                caption: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                tiny: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    strong: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                link: {
                    default: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                    small: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                    caption: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                        textDecoration: string;
                    };
                };
                action: {
                    base: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    small: {
                        fontFamily: string;
                        fontWeight: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
            };
        };
        color: {
            text: {
                brand: {
                    primary: string;
                };
                default: string;
                inverse: string;
                light: {
                    default: string;
                    inverse: string;
                };
                disabled: string;
                link: {
                    default: string;
                    hover: string;
                };
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                input: {
                    placeholder: string;
                };
                action: {
                    primary: string;
                    danger: string;
                    alt: {
                        primary: string;
                        danger: string;
                    };
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            border: {
                default: string;
                light: string;
                disabled: string;
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                input: {
                    default: string;
                    hover: string;
                    readonly: string;
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            background: {
                transparent: string;
                surface: {
                    default: string;
                    inverse: string;
                    middle: string;
                    fore: string;
                };
                default: string;
                disabled: string;
                active: string;
                danger: string;
                success: string;
                info: string;
                warning: string;
                ai: string;
                mask: string;
                input: {
                    default: string;
                    readonly: string;
                };
                toggle: {
                    default: string;
                    active: string;
                };
                switch: {
                    default: string;
                    active: string;
                    disabled: string;
                    error: string;
                    marker: {
                        default: string;
                        active: string;
                        error: string;
                    };
                    control: {
                        default: string;
                        disabled: string;
                    };
                };
                progress: {
                    default: string;
                    active: {
                        default: string;
                        light: string;
                    };
                };
                action: {
                    primary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    secondary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    tertiary: {
                        default: string;
                        hover: string;
                        pressed: string;
                    };
                    danger: {
                        default: string;
                        hover: string;
                        pressed: string;
                        light: {
                            default: string;
                            hover: string;
                            pressed: string;
                        };
                    };
                };
                button: {
                    accent: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                    danger: {
                        primary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        secondary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                        tertiary: {
                            default: string;
                            hover: string;
                            pressed: string;
                            disabled: string;
                        };
                    };
                };
            };
            status: {
                background: {
                    translating: string;
                    review: string;
                    completed: string;
                    error: string;
                    ready: string;
                    processing: string;
                    published: string;
                };
                text: {
                    translating: string;
                    review: string;
                    completed: string;
                    error: string;
                    ready: string;
                    processing: string;
                    published: string;
                };
            };
        };
        elevation: {
            layer1: string;
            layer2: string;
            layer3: string;
            focus: string;
        };
        mode: string;
    };
};
export declare const ThemeSwitcher: ({ onSelectTheme, selectedTheme, }: {
    onSelectTheme: (selectedTheme: Themes) => void;
    selectedTheme: Themes;
}) => import("react").JSX.Element;
