import { CardColorsEnum } from '../constants/cardColors.enum';
import * as S from '../styles/CardBox.style';
import { CardColorType } from '../types/cardColor.type';
import { CardKindType } from '../types/cardKind.type';

import Icon from './Icon';

interface CardBoxProps {
  kind: CardKindType;
  color: CardColorType;
}

export default function CardBox({ kind, color }: CardBoxProps) {
  const cardKindLabel = () => {
    if (kind === 9 || kind === 10) return kind;
    return kind[0];
  };

  const cardColorStyle = () => {
    if (color === CardColorsEnum.Hearts || color === CardColorsEnum.Tiles)
      return { color: '#D91828' };
    return { color: '#2F2F2F' };
  };

  return (
    <S.CardBox>
      <S.CardLabel>
        <span style={cardColorStyle()}>{cardKindLabel()}</span>
      </S.CardLabel>
      <S.CardColor>
        <Icon cardColor={color} />
      </S.CardColor>
      <S.BottomCardLabel>
        <span style={cardColorStyle()}>{cardKindLabel()}</span>
      </S.BottomCardLabel>
    </S.CardBox>
  );
}
