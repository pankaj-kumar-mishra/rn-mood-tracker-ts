import { Dimensions } from 'react-native';

const { fontScale, scale } = Dimensions.get('screen');

// don't know enough about Android itself, but from what I can gather, it appears that Android can report back two different numbers:

// width/height with soft menu bar
// width/height without soft menu bar (so the actual entire screen)
// A quick test on my Android device printing out these values and I was able to confirm that window's height < screen's height. So in all likelihood, this means:

// window: reports width/height without the soft menu bar
// screen: reports entire screen's width/height

console.log({ fontScale, scale });
// NOTE using "scale" property we can make responsive font size

export const theme = {
  // COLORS
  colorPurple: '#454C73',
  colorWhite: '#fff',
  colorLavender: '#87677B',
  colorBlue: '#1D84B5',
  colorGrey: '#8E9AAF',
  // FONTS
  fontFamilyBold: 'Kalam-Bold',
  fontFamilyRegular: 'Kalam-Regular',
  fontFamilyLight: 'Kalam-Light',
};
