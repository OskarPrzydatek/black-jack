import React from 'react';

import * as S from '../styles/CardList.style';

interface CardListProps {
  children: React.ReactNode;
}

export default function CardList({ children }: CardListProps) {
  return <S.CardList>{children}</S.CardList>;
}
