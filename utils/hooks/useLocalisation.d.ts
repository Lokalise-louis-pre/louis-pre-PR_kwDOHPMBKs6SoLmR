export declare const useLocalisation: () => {
    firstDayOfWeek: number;
    formatCurrency: (number: number, currency: string, options?: Intl.NumberFormatOptions | undefined) => string;
    formatDate: (date: Date, format: "PP" | "PPpp" | "LLLL y" | "LLLL do" | "yyyy-MM-dd" | "yyyy-MM-dd H:mm:ss") => string;
};
