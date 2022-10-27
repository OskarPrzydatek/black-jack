import { CardColorType } from '../types/cardColor.type';
import { CardKindType } from '../types/cardKind.type';

interface CardBoxProps {
  kind: CardKindType;
  color: CardColorType;
}

export default function CardBox({ kind, color }: CardBoxProps) {
  return (
    <li>
      <span>{kind}</span>
      &nbsp;
      <span>{color}</span>
    </li>
  );
}
