/**
 * Sort an array of DOM nodes according to the HTML tree order
 * @see http://www.w3.org/TR/html5/infrastructure.html#tree-order
 */
export declare const sortNodes: (nodes: Node[]) => Node[];
export declare const getNextIndex: (current: number, max: number, loop: boolean) => number;
export declare const getPrevIndex: (current: number, max: number, loop: boolean) => number;
export declare const cast: <T>(value: unknown) => T;
