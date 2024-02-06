import * as React from "react";
import { Routine } from "../types/routineType";
import styled from "styled-components";
import { RenderRoutineDetail } from "../util/renderRoutineList";

export interface CalenderProps {
  curDate: Date;
  routines: Routine[];
}

export function RoutineList({ curDate, routines }: CalenderProps) {
  const renderRoutines = () => {
    return routines.map((routine) => {
      const startDate = new Date(routine.StartDate);
      const endDate = new Date(routine.EndDate);

      // curDate가 시작날짜와 종료날짜 사이에 있는 경우에만 렌더링
      if (curDate >= startDate && curDate <= endDate) {
        return <RenderRoutineDetail {...routine} />;
      }
      return null;
    });
  };

  return <List>{renderRoutines()}</List>;
}

const List = styled.section`
  margin-top: 5%;
`;
