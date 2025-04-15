/**
 * Return the formatted date string in the given format. The result may vary by locale.
 * see https://date-fns.org/v2.21.1/docs/format for full formatting options.
 */
export declare const formatDate: (date: Date, format: 'PP' | 'PPpp' | 'LLLL y' | 'LLLL do' | 'yyyy-MM-dd' | 'yyyy-MM-dd H:mm:ss') => string;
