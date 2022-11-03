import React from 'react';

import * as S from '../styles/CardList.style';

interface CardListProps {
  children: React.ReactNode;
  dataTestID?: string;
}

export default function CardList({ children, dataTestID }: CardListProps) {
  return <S.CardList data-testid={dataTestID}>{children}</S.CardList>;
}
