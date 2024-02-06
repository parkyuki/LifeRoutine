import * as React from "react";
import { DateType } from "../zustand/useDate";
import { LuArrowLeftSquare, LuArrowRightSquare } from "react-icons/lu";
import { styled } from "styled-components";

export function Header({ curDate, setCurDate }: DateType) {
  const changeMonth = (amount: number) => {
    const newDay = new Date(curDate);
    newDay.setMonth(curDate.getMonth() + amount);
    setCurDate(newDay);
  };

  return (
    <HeaderMain>
      <Arrowbtn onClick={() => changeMonth(-1)}>
        <ArrowLeft />
      </Arrowbtn>
      <CurMonth>{curDate.getMonth() + 1}월</CurMonth>
      <Arrowbtn onClick={() => changeMonth(1)}>
        <ArrowRight />
      </Arrowbtn>
    </HeaderMain>
  );
}

const HeaderMain = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2% 0;
`;
const Arrowbtn = styled.div`
  cursor: pointer;
`;
const ArrowLeft = styled(LuArrowLeftSquare)`
  width: 35px;
  height: auto;
`;
const ArrowRight = styled(LuArrowRightSquare)`
  width: 35px;
  height: auto;
`;
const CurMonth = styled.div`
  font-size: 30px;
`;
