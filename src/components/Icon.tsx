import {
  BsFillSuitClubFill,
  BsFillSuitDiamondFill,
  BsFillSuitHeartFill,
  BsFillSuitSpadeFill,
} from 'react-icons/bs';

import { CardColorType } from '../types/cardColor.type';

interface IconProps {
  cardColor: CardColorType;
}

export default function Icon({ cardColor }: IconProps) {
  const icon = {
    Hearts: <BsFillSuitHeartFill fill="#D91828" />,
    Tiles: <BsFillSuitDiamondFill fill="#D91828" />,
    Clovers: <BsFillSuitClubFill fill="#2F2F2F" />,
    Pikes: <BsFillSuitSpadeFill fill="#2F2F2F" />,
  };
  return icon[cardColor];
}
