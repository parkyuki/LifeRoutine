import styled from "styled-components";
import { Daily, Monthly, Routine, Weekly } from "../types/routineType";

export const renderRoutine = (
  day: number | null,
  routine: Routine,
  daysInMonth: number
) => {
  const isDaily = (routine: Routine): routine is Daily => "Daily" in routine;
  const isWeekly = (routine: Routine): routine is Weekly => "Weekly" in routine;
  const isMonthly = (routine: Routine): routine is Monthly =>
    "Monthly" in routine;

  if (isWeekly(routine) && typeof day === "number") {
    const checkDate = new Date(2024, daysInMonth, day);
    const currentDayOfWeek = checkDate.getDay();
    if (routine.Weekly.some((weekly) => weekly === currentDayOfWeek)) {
      return (
        <WeeklyRoutine key={routine.id} color={routine.Color}>
          주
        </WeeklyRoutine>
      );
    }
  } else if (
    isMonthly(routine) &&
    routine.Monthly.some((monthly) => monthly === day)
  ) {
    return (
      <MonthlyRoutine key={routine.id} color={routine.Color}>
        월
      </MonthlyRoutine>
    );
  } else if (isDaily(routine) && typeof day === "number") {
    return (
      <DailyRoutine key={routine.id} color={routine.Color}>
        일
      </DailyRoutine>
    );
  }
};

const commonStyle = `
  font-size: 15px;
`;

const MonthlyRoutine = styled.div`
  ${commonStyle};
  background-color: ${(props) => props.color};
  color: red;
`;
const WeeklyRoutine = styled.div`
  ${commonStyle};
  background-color: ${(props) => props.color};
`;
const DailyRoutine = styled.div`
  ${commonStyle};
  background-color: ${(props) => props.color};
`;
