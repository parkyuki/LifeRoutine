import React from "react";
import { Dayjs } from "dayjs";
import { Routine } from "../../types/routineType";
import { useRoutineStore } from "../../zustand/userRoutine";
import { useNavigate } from "react-router-dom";

interface ICreateBtnProps {
  time: Dayjs;
  startDate: Dayjs;
  endDate: Dayjs;
  title: string;
  colorNum: string;
  selectedDays: number[];
  selectRoutine: string;
}

const CreateBtn: React.FC<ICreateBtnProps> = ({
  time,
  startDate,
  endDate,
  title,
  colorNum,
  selectedDays,
  selectRoutine,
}) => {
  const { routines, addRoutine } = useRoutineStore();
  const lastId = routines.length > 0 ? routines[routines.length - 1].id : 0;
  const nextId = lastId + 1;

  const navigate = useNavigate();

  const handleClick = () => {
    const formattedDate = time.format("A hh:mm ");
    const sDate = startDate.format("YYYY-MM-DD ");
    const eDate = endDate.format("YYYY-MM-DD ");

    let dummy: Routine;

    if (selectRoutine === "Weekly") {
      dummy = {
        id: nextId,
        Time: formattedDate,
        Title: title,
        StartDate: sDate,
        EndDate: eDate,
        Color: colorNum,
        Weekly: selectedDays,
      };
    } else if (selectRoutine === "Daily") {
      dummy = {
        id: nextId,
        Time: formattedDate,
        Title: title,
        StartDate: sDate,
        EndDate: eDate,
        Color: colorNum,
        Daily: selectedDays,
      };
    } else if (selectRoutine === "Monthly") {
      dummy = {
        id: nextId,
        Time: formattedDate,
        Title: title,
        StartDate: sDate,
        EndDate: eDate,
        Color: colorNum,
        Monthly: selectedDays,
      };
    } else {
      throw new Error("잘못된 루틴 유형입니다.");
    }
    addRoutine(dummy);
    navigate("/");
  };

  return <button onClick={handleClick}>루틴 생성</button>;
};

export default CreateBtn;
