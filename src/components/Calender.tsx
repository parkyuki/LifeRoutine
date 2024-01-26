import styled from "styled-components";
import { Daily, Monthly, Routine, Weekly } from "../types/routineType";

export interface CalenderProps {
  curDate: Date;
  routines: Routine[];
}

const Calender = ({ curDate, routines }: CalenderProps) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = curDate.getMonth();

  const calculateCalendarDays = (curDate: Date): (number | null)[] => {
    const thisLast = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      0
    ).getDate();
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth()
    ).getDay();

    const calendarDays: (number | null)[] = Array.from(
      { length: thisLast },
      (_, index) => index + 1
    );
    //1일 앞 날짜에 null 추가
    for (let i = 0; i < firstDay; i++) {
      calendarDays.unshift(null);
    }
    console.log(calendarDays);
    return calendarDays;
  };

  const calendarDays = calculateCalendarDays(curDate);

  const renderRoutine = (day: number | null, routine: Routine) => {
    const isDaily = (routine: Routine): routine is Daily => "Daily" in routine;
    const isWeekly = (routine: Routine): routine is Weekly =>
      "Weekly" in routine;
    const isMonthly = (routine: Routine): routine is Monthly =>
      "Monthly" in routine;

    if (isWeekly(routine) && typeof day === "number") {
      const checkDate = new Date(2024, daysInMonth, day);
      const currentDayOfWeek = checkDate.getDay();
      if (routine.Weekly.some((weekly) => weekly === currentDayOfWeek)) {
        return <WeeklyRoutine color={routine.Color}>주</WeeklyRoutine>;
      }
    } else if (isMonthly(routine)) {
      if (routine.Monthly.some((monthly) => monthly === day)) {
        return <MonthlyRoutine color={routine.Color}>월</MonthlyRoutine>;
      }
    } else if (isDaily(routine) && typeof day === "number") {
      return <DailyRoutine color={routine.Color}>일</DailyRoutine>;
    } else {
      // 다른 타입에 대한 처리
      console.log("is Null");
    }
  };

  return (
    <Article>
      <Week>
        {daysOfWeek.map((it) => (
          <DaysOfWeek>{it}</DaysOfWeek>
        ))}
      </Week>
      <Days>
        {calendarDays.map((day) => (
          <Day key={day}>
            {day}
            {routines.map((routine) => renderRoutine(day, routine))}
          </Day>
        ))}
      </Days>
    </Article>
  );
};

Calender.defaultProps = {
  diaryList: [],
};

export default Calender;

const Article = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
`;
const Week = styled.div`
  display: flex;
  font-size: 30px;
  border-bottom: 1px solid #e2e2e2;
`;
const DaysOfWeek = styled.div`
  width: calc(100% / 7);
`;

const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
const Day = styled.div`
  width: calc(100% / 7);

  font-size: 20px;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
`;

const commonStyle = `
  font-size: 20px;
`;
const MonthlyRoutine = styled.div`
  ${commonStyle}
  background-color:${(props) => props.color}
`;
const WeeklyRoutine = styled.div`
  ${commonStyle}
  background-color:${(props) => props.color}
`;
const DailyRoutine = styled.div`
  ${commonStyle}
  background-color:${(props) => props.color}
`;
