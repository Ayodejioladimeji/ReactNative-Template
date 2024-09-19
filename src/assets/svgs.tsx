import Svg, {
  SvgProps,
  Path,
  Rect,
} from 'react-native-svg';

export const DisableCheckIcon = (props: SvgProps) => (
  <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
    <Rect x="0.5" y="1" width="19" height="19" rx="9.5" stroke="#888888" />
  </Svg>
);

export const ActiveCheckIcon = (props: SvgProps) => (
  <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
    <Rect
      y="0.5"
      width="20"
      height="20"
      rx="10"
      fill="#FFD34D"
      fill-opacity="0.8"
    />
    <Path
      d="M6.11133 10.4995L8.88911 13.2772L14.4447 7.72168"
      stroke="#111111"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const CancelIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 11 11"
    fill="none">
    <Path
      d="M3.34652 7.47379L5.43779 5.38253M7.52905 3.29126L5.43779 5.38253M5.43779 5.38253L3.34652 3.29126M5.43779 5.38253L7.52905 7.47379"
      stroke="black"
      stroke-width="1.19669"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const ArrowIcon = (props: SvgProps) => (
  <Svg width="17" height="15" viewBox="0 0 17 15" fill="none">
    <Path
      d="M1.25 7.27441L16.25 7.27441"
      stroke="#000"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M7.29883 13.299L1.24883 7.275L7.29883 1.25"
      stroke="#000"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
