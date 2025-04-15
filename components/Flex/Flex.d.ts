import { default as React, AllHTMLAttributes, CSSProperties, DOMAttributes, ElementType, ReactNode } from '../../../node_modules/react';
import { SpacingLevels } from '../../foundations/designTokens';
export type FlexProps = Omit<AllHTMLAttributes<HTMLElement>, 'as'> & Omit<DOMAttributes<HTMLElement>, 'children'> & {
    /**
     * Toggles inline-flex.
     */
    inline?: boolean;
    /**
     * Sets align-items.
     */
    align?: CSSProperties['alignItems'];
    /**
     * Sets justify-content.
     */
    justify?: CSSProperties['justifyContent'];
    /**
     * Sets flex-wrap.
     */
    wrap?: CSSProperties['flexWrap'];
    /**
     * Sets flex-direction.
     */
    direction?: CSSProperties['flexDirection'];
    /**
     * Sets gap, or row-gap and column-gap, using theme spacing.
     */
    gap?: SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels];
    /**
     * Sets flex-basis when used as a child of another flex container.
     */
    basis?: CSSProperties['flexBasis'];
    /**
     * Sets flex-grow when used as a child of another flex container.
     */
    grow?: CSSProperties['flexGrow'];
    /**
     * Sets flex-shrink when used as a child of another flex container.
     */
    shrink?: CSSProperties['flexShrink'];
    /**
     * Sets align-self when used as a child of another flex container.
     */
    alignSelf?: CSSProperties['alignSelf'];
    /**
     * Fills the width available in the parent.
     */
    fullWidth?: boolean;
    /**
     * Renders any flex items in the flex container.
     */
    children: ReactNode;
    /**
     * Use generic Element Type
     */
    as?: ElementType;
    /**
     * Support additional classes
     */
    className?: string;
    /**
     * Optional style object
     */
    style?: Omit<CSSProperties, 'alignItems' | 'justifyContent' | 'flexWrap' | 'flexDirection' | 'flexBasis' | 'flexGrow' | 'flexShrink' | 'alignSelf'>;
};
/**
 * @deprecated This component is deprecated.
 * Please use utility classes.
 */
export declare const Flex: React.ForwardRefExoticComponent<Omit<React.AllHTMLAttributes<HTMLElement>, "as"> & Omit<React.DOMAttributes<HTMLElement>, "children"> & {
    /**
     * Toggles inline-flex.
     */
    inline?: boolean | undefined;
    /**
     * Sets align-items.
     */
    align?: CSSProperties['alignItems'];
    /**
     * Sets justify-content.
     */
    justify?: CSSProperties['justifyContent'];
    /**
     * Sets flex-wrap.
     */
    wrap?: CSSProperties['flexWrap'];
    /**
     * Sets flex-direction.
     */
    direction?: CSSProperties['flexDirection'];
    /**
     * Sets gap, or row-gap and column-gap, using theme spacing.
     */
    gap?: SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels] | undefined;
    /**
     * Sets flex-basis when used as a child of another flex container.
     */
    basis?: CSSProperties['flexBasis'];
    /**
     * Sets flex-grow when used as a child of another flex container.
     */
    grow?: CSSProperties['flexGrow'];
    /**
     * Sets flex-shrink when used as a child of another flex container.
     */
    shrink?: CSSProperties['flexShrink'];
    /**
     * Sets align-self when used as a child of another flex container.
     */
    alignSelf?: CSSProperties['alignSelf'];
    /**
     * Fills the width available in the parent.
     */
    fullWidth?: boolean | undefined;
    /**
     * Renders any flex items in the flex container.
     */
    children: ReactNode;
    /**
     * Use generic Element Type
     */
    as?: React.ElementType | undefined;
    /**
     * Support additional classes
     */
    className?: string | undefined;
    /**
     * Optional style object
     */
    style?: Omit<React.CSSProperties, "alignItems" | "justifyContent" | "flexWrap" | "flexDirection" | "flexBasis" | "flexGrow" | "flexShrink" | "alignSelf"> | undefined;
} & React.RefAttributes<HTMLElement>>;
