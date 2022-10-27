import styled from 'styled-components';

export const CardBox = styled.li`
  width: 80px;
  height: 120px;
  padding: 1%;
  background-color: #f2f2f2;
  border-radius: 5%;
  box-shadow: 1px 1px 1px 2px #255941;
  display: flex;
  flex-direction: column;
`;

export const CardLabel = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;

export const BottomCardLabel = styled(CardLabel)`
  justify-content: flex-end;
`;

export const CardColor = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
