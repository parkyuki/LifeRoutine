import styled from "styled-components";
import { Routine } from "../types/routineType";
import { calculateCalendarDays } from "../util/calculateCalendarDays";
import { RenderRoutine } from "../util/renderCalenderRoutine";
import { useDateStore } from "../zustand/useDate";

const Calender = ({ routines }: { routines: Routine[] }) => {
  const { curDate, setCurDate } = useDateStore();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = curDate.getMonth();
  const calendarDays = calculateCalendarDays(curDate);
  const handleClick = (day: number) => {
    const newDate = new Date(curDate);
    newDate.setDate(day);
    setCurDate(newDate);
  };

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
            <Day key={index} onClick={() => handleClick(day)}>
              {day}
              {routines.map((routine) =>
                RenderRoutine(day, routine, daysInMonth)
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
  cursor: pointer;
  transition: box-shadow 0.1s ease;
  &:hover {
    background-color: #fbfbfb;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  }
`;
