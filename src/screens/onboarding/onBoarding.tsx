import React from 'react';
import FullButton from '../../components/buttons/fullWidthSingleButton/fullButton.tsx';
import MiddleScreenImage from '../../components/middleScreenImage/MiddleScreenImage.tsx';
import CommonText from '../../components/commonText/CommonText.tsx';

const OnBoarding = () => {
    return (
      <>
        <MiddleScreenImage image={''} />
        <CommonText
          label={'Hello this component is created by Hamza sarwar'}
          heading={'Common Text'}
        />
        <FullButton />
      </>
    );
};
export default OnBoarding;
