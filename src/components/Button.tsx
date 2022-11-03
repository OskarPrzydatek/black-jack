import * as S from '../styles/Buton.style';

interface ButtonProps {
  label: string;
  isDisabled?: boolean;
  dataTestID?: string;
  onClick: () => void;
}

export default function Button({
  label,
  isDisabled,
  dataTestID,
  onClick,
}: ButtonProps) {
  return (
    <S.Button data-testid={dataTestID} disabled={isDisabled} onClick={onClick}>
      {label}
    </S.Button>
  );
}
