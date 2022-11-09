import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface SvgProps {
  color?: string;
}

export const SvgAdd = ({color = "#72A8BC"}: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1a1 1 0 1 0-2 0v6H1a1 1 0 0 0 0 2h6v6a1 1 0 1 0 2 0V9h6a1 1 0 1 0 0-2H9V1Z"
      fill={color}
    />
  </Svg>
);
