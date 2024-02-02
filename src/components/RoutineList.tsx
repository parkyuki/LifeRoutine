import * as React from "react";
import { Daily, Monthly, Routine, Weekly } from "../types/routineType";

export interface CalenderProps {
  curDate: Date;
  routines: Routine[];
}

export function RoutineList({ curDate, routines }: CalenderProps) {
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
          return (
            <div key={routine.id}>
              <h3>{routine.Title}</h3>
            </div>
          );
        } else if (
          isWeekly(routine) &&
          routine.Weekly.includes(curDate.getDay())
        ) {
          return (
            <div key={routine.id}>
              <h3>{routine.Title}</h3>
            </div>
          );
        } else if (
          isMonthly(routine) &&
          routine.Monthly.includes(curDate.getDate())
        ) {
          return (
            <div key={routine.id}>
              <h3>{routine.Title}</h3>
            </div>
          );
        }
      }

      return null;
    });
  };

  return <div>{renderRoutines()}</div>;
}
