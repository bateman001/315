import { useState } from "react";
import { IconType } from "react-icons/lib";

interface IconProps {
  Icon: IconType;
  size: number;
  hoverColor?: string;
  color: string;
}

export const Icon = (props: IconProps) => {
  const { Icon, size, hoverColor, color } = props;
  const [hov, setHov] = useState<boolean>(false);

  return hoverColor ? (
    <Icon
      onMouseOver={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      size={size}
      color={hov ? hoverColor : color}
    />
  ) : (
    <Icon size={size} color={color} />
  );
};
