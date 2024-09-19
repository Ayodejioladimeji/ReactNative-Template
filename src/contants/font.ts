import {Platform} from 'react-native';

// to differentiate between the platforms(ios/android) font configurations
const FONTS = {
  ...Platform.select({
    ios: {
      NOTOSANSBOLD: 'NotoSans-Bold',
      NOTOSANSSEMIBOLD: 'NotoSans-SemiBold',
      NOTOSANSREGULAR: 'NotoSans-Regular',
    },
    android: {
      NOTOSANSBOLD: 'NotoSansBold',
      NOTOSANSSEMIBOLD: 'NotoSansSemiBold',
      NOTOSANSREGULAR: 'NotoSansRegular',
    },
  }),
};

export default FONTS;
