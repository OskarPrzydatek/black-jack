import * as S from '../styles/Header.style';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <S.Header>{title}</S.Header>;
}
