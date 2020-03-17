export const small = 15;
export const regular = 18;
export const large = 24;
export const xlarge = 30;
export const xxlarge = 36;

export type IFontSizes = "small" | "regular" | "large" | "xlarge" | "xxlarge";

export const fontSizes: { [fontSize in IFontSizes]: number } = {
  small,
  regular,
  large,
  xlarge,
  xxlarge
};
