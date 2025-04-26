import {LAYOUT} from './layoutSizeConstants.ts';

export const getDefaultLayoutSpacing = (scale: number) => {
  return {
    XS: scale * LAYOUT.SIZE.XS,
    SM: scale * LAYOUT.SIZE.SM,
    MD: scale * LAYOUT.SIZE.MD,
    LG: scale * LAYOUT.SIZE.LG,
    XL: scale * LAYOUT.SIZE.XL,
    XXL: scale * LAYOUT.SIZE.XXL,
  };
};
