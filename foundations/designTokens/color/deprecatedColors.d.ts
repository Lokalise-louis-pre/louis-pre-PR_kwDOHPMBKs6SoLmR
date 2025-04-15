export type GeneratedDeprecatedColors = ReturnType<typeof generateDeprecatedThemeColors>;
export declare const generateDeprecatedThemeColors: (mode: 'light' | 'dark') => {
    content: {
        buttonText2: string;
    };
    interactive: {
        yellow: {
            idle: string;
            hover: string;
        };
    };
};
