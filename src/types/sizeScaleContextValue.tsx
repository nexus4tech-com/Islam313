import {ScreenDimensions} from './contexts/themesTypes.ts';

/******************************************************************
 * SizeScaleContext is a context for size scale and screenDimensions based
 * upon the width and PixelRatio of the device. Size Scale is used
 * to scale the fonts sizes, spacing and dimensions for containers
 * or components like images etc.
 ******************************************************************/
export type SizeScaleContextValue = {
  screenDimensions: ScreenDimensions;
  sizeScale: number;
};
