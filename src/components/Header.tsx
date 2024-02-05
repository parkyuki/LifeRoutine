import * as React from "react";
import { DateType } from "../zustand/useDate";

export function Header({ curDate, setCurDate }: DateType) {
  const changeMonth = (amount: number) => {
    const newDay = new Date(curDate);
    newDay.setMonth(curDate.getMonth() + amount);
    setCurDate(newDay);
  };

  return (
    <div>
      <button onClick={() => changeMonth(-1)}>이전</button>
      <div>{curDate.getMonth() + 1}월</div>
      <button onClick={() => changeMonth(1)}>이전</button>
    </div>
  );
}
