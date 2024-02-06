import styled from "styled-components";
import { Routine } from "../types/routineType";
import { calculateCalendarDays } from "../util/calculateCalendarDays";
import { renderRoutine } from "../util/renderCalenderRoutine";

export interface CalenderProps {
  curDate: Date;
  routines: Routine[];
}

const Calender = ({ curDate, routines }: CalenderProps) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = curDate.getMonth();
  const calendarDays = calculateCalendarDays(curDate);
  console.log(curDate.toLocaleDateString());
  return (
    <Article>
      <Week>
        {daysOfWeek.map((it) => (
          <DaysOfWeek key={it}>{it}</DaysOfWeek>
        ))}
      </Week>
      <Days>
        {calendarDays.map((day, index) =>
          day !== null ? (
            <Day key={index}>
              {day}
              {routines.map((routine) =>
                renderRoutine(day, routine, daysInMonth)
              )}
            </Day>
          ) : (
            <Day key={index} />
          )
        )}
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
  min-height: 440px;
`;
const Day = styled.div`
  width: calc(100% / 7);
  font-size: 20px;
  border-bottom: 2px solid #ececec;
`;
