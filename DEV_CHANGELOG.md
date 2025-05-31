# Developer Changelog

## [2025-05-29] - Added First Launch Service
**Author:** Hamza Sarwar
- Created `firstLaunchService.ts` in `services/` to check if the app is launched for the first time.

---

- hassan using iphone 15 pro max 17.2 for islam 313

## [2025-05-28] - created Reusable components
**Author:** Hamza Sarwar
- Created `Full Button` for full screen button you just need to pass it label key or style if you want and onPress and boom it will give you a give a consistent button throughout the app.
- Created `MiddleScreenImage.tsx` component inside the component for single image in the middle of the screen. If you want a single image at the center of the screen then you should have use this component. Here how you can use it.
- `< MiddleScreeImage image = {require('path to image')}/>`
- Also created OnboardingHeader component for  row content , left and right .
- `<OnboardingHeader onSkip = () => {} showSkip = your method/>`
- Created `CommonText` component for long text so that you can use it directly without maintaining position.
- `<CommonText heading = {'Heading'} label = {'the label you want to give }/>`
- Created `<PaginationDots/>` component for pagination
- `<PaginationDots total = {total number of pages} activeIndex={your current index}/>`

## [2025-05-28] - created Windows Service For screen width and height under services

## [2025-06-01] - created Dynamic card component for cards accross app having dynamic width height and on press etc...
# you can find it under `src/components/cards/DynamicCard` 

you can use it like this 

<DynamicCard

width={300}
height="auto"
backgroundColor="#F8F9FA"
borderRadius={16}
borderColor="#E9ECEF"
borderWidth={2}
onPress={() => console.log('Card pressed')} >

< Text style={styles.title}>Dynamic Card < /Text>

< Text>Content that automatically sizes the card < /Text>

< /DynamicCard>

