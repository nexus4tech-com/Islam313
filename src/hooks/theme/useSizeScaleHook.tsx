// Hook for consuming the contexts
import {useContext} from 'react';
import SizeScaleContext from '../../contexts/sizeScale/sizeScaleContext.tsx';
import {SizeScaleContextValue} from '../../types/sizeScaleContextValue.tsx';

export const useSizeScale = (): SizeScaleContextValue => {
  const context = useContext(SizeScaleContext);

  if (context === undefined) {
    throw new Error('useScreenWidth must be used within a ScreenWidthProvider');
  }

  return context;
};
