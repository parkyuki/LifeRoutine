import * as React from "react";
import { Daily, Monthly, Routine, Weekly } from "../types/routineType";
import styled from "styled-components";

import { RenderRoutineDetail } from "../util/renderRoutineList";
import { useDateStore } from "../zustand/useDate";
import { useNavigate } from "react-router-dom";

export interface CalenderProps {
  curDate: Date;
  routines: Routine[];
}

export function RoutineList({ routines }: { routines: Routine[] }) {
  const { curDate } = useDateStore();
  const todayDay = curDate.getDate();
  const navigate = useNavigate();

  const renderRoutines = () => {
    return routines.map((routine) => {
      const startDate = new Date(routine.StartDate);
      const endDate = new Date(routine.EndDate);

      const isDaily = (routine: Routine): routine is Daily =>
        "Daily" in routine;
      const isWeekly = (routine: Routine): routine is Weekly =>
        "Weekly" in routine;
      const isMonthly = (routine: Routine): routine is Monthly =>
        "Monthly" in routine;

      // curDate가 시작날짜와 종료날짜 사이에 있는 경우에만 렌더링
      if (curDate >= startDate && curDate <= endDate) {
        if (isDaily(routine) && routine.Daily.length === 0) {
          return <RenderRoutineDetail curDate={curDate} routine={routine} />;
        } else if (
          isWeekly(routine) &&
          routine.Weekly.includes(curDate.getDay())
        ) {
          return <RenderRoutineDetail curDate={curDate} routine={routine} />;
        } else if (
          isMonthly(routine) &&
          routine.Monthly.includes(curDate.getDate())
        ) {
          return <RenderRoutineDetail curDate={curDate} routine={routine} />;
        }
      }

      return null;
    });
  };

  return (
    <List>
      <Menu>
        <Btn onClick={() => navigate("/new")}>루틴 생성</Btn>
        <Today>{todayDay}일</Today>
      </Menu>
      {renderRoutines()}
    </List>
  );
}

const List = styled.section`
  margin-top: 5%;
`;
const Menu = styled.article`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 5%;
  align-items: center;
`;
const Btn = styled.button`
  font-family: "Poor Story", system-ui;
  background-color: #cdcdcd;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const Today = styled.div``;
