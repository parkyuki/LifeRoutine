import styled from "styled-components";
import { Daily, Monthly, Routine, Weekly } from "../types/routineType";
import { getDateWithoutTime } from "./getDateWithoutTime";

export const RenderRoutine = (
  day: number,
  routine: Routine,
  daysInMonth: number
) => {
  // const startDate = new Date(routine.StartDate);
  // const endDate = new Date(routine.EndDate);

  const isDaily = (routine: Routine): routine is Daily => "Daily" in routine;
  const isWeekly = (routine: Routine): routine is Weekly => "Weekly" in routine;
  const isMonthly = (routine: Routine): routine is Monthly =>
    "Monthly" in routine;

  const checkDate = getDateWithoutTime(new Date(2024, daysInMonth, day));
  const startDate = getDateWithoutTime(new Date(routine.StartDate));
  const endDate = getDateWithoutTime(new Date(routine.EndDate));
  console.log(
    "checkDate",
    checkDate,
    "endDate",
    endDate,
    "startDate",
    startDate
  );
  if (checkDate >= startDate && checkDate <= endDate) {
    if (isWeekly(routine) && typeof day === "number") {
      const currentDayOfWeek = checkDate.getDay();
      if (routine.Weekly.some((weekly) => weekly === currentDayOfWeek)) {
        return (
          <WeeklyRoutine key={routine.id} color={routine.Color}>
            {routine.Title}
          </WeeklyRoutine>
        );
      }
    } else if (
      isMonthly(routine) &&
      routine.Monthly.some((monthly) => monthly === day)
    ) {
      return (
        <MonthlyRoutine key={routine.id} color={routine.Color}>
          {routine.Title}
        </MonthlyRoutine>
      );
    } else if (isDaily(routine) && typeof day === "number") {
      return (
        <DailyRoutine key={routine.id} color={routine.Color}>
          {routine.Title}
        </DailyRoutine>
      );
    }
  }
};

const commonStyle = `
  font-size: 15px;
`;

const MonthlyRoutine = styled.div`
  ${commonStyle};
  background-color: ${(props) => props.color};
`;
const WeeklyRoutine = styled.div`
  ${commonStyle};
  background-color: ${(props) => props.color};
`;
const DailyRoutine = styled.div`
  ${commonStyle};
  background-color: ${(props) => props.color};
`;
