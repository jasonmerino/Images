export const dark1 = "#222";
export const light1 = "#fff";
export const lightAlpha7 = "rgba(255, 255, 255, 0.7)";

export type IColor = "dark1" | "light1" | "lightAlpha7";

export const colors: { [color in IColor]: string } = {
  dark1,
  light1,
  lightAlpha7
};
