import * as React from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { colors } from "../util/colorsSet";
import { ColorButton } from "../components/NewPage/ColorButton";
import RoutineRadio from "../components/NewPage/Radio";
import { useNavigate, useParams } from "react-router-dom";
import useRoutineStore from "../zustand/userRoutine";
import { Daily, Monthly, Routine, Weekly } from "../types/routineType";

export interface IDetailProps {}

export function Detail(props: IDetailProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { routines, updateRoutine, removeRoutine } = useRoutineStore();
  const targetRoutine = routines.find(
    (routine) => routine.id === parseInt(id!)
  );
  const isMonthly = (routine: Routine): routine is Monthly =>
    "Monthly" in routine;
  const isWeekly = (routine: Routine): routine is Weekly => "Weekly" in routine;
  const isDaily = (routine: Routine): routine is Daily => "Daily" in routine;

  const originalTime = dayjs(targetRoutine?.Time, "A hh:mm");

  const [colorNum, setColorNum] = useState<string>(targetRoutine!.Color);
  const [title, setTitle] = useState<string>(targetRoutine!.Title);
  const [time, setTime] = useState<Dayjs>(originalTime);
  const [startDate, setStartDate] = useState<Dayjs>(
    dayjs(targetRoutine?.StartDate)
  );
  const [endDate, setEndDate] = useState<Dayjs>(dayjs(targetRoutine!.EndDate));

  const [selectedDays, setSelectedDays] = useState<number[]>(() => {
    if (isMonthly(targetRoutine!)) {
      return targetRoutine.Monthly;
    } else if (isWeekly(targetRoutine!)) {
      return targetRoutine.Weekly;
    } else if (isDaily(targetRoutine!)) {
      return targetRoutine.Daily;
    } else {
      return [];
    }
  });

  const [selectRoutine, setSelectRoutine] = useState<string>(() => {
    if (targetRoutine) {
      if ("Monthly" in targetRoutine) {
        return "Monthly";
      } else if ("Weekly" in targetRoutine) {
        return "Weekly";
      } else if ("Daily" in targetRoutine) {
        return "Daily";
      }
    }
    return "Daily"; // 기본값으로 'Daily'을 반환합니다.
  });

  const updateClick = () => {
    const formattedDate = time.format("A hh:mm");
    const sDate = startDate.format("YYYY-MM-DD");
    const eDate = endDate.format("YYYY-MM-DD");

    let dummy: Routine;

    if (selectRoutine === "Weekly") {
      dummy = {
        id: targetRoutine!.id,
        Time: formattedDate,
        Title: title,
        StartDate: sDate,
        EndDate: eDate,
        Color: colorNum,
        Weekly: selectedDays,
      };
    } else if (selectRoutine === "Daily") {
      dummy = {
        id: targetRoutine!.id,
        Time: formattedDate,
        Title: title,
        StartDate: sDate,
        EndDate: eDate,
        Color: colorNum,
        Daily: selectedDays,
      };
    } else if (selectRoutine === "Monthly") {
      dummy = {
        id: targetRoutine!.id,
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
    updateRoutine(targetRoutine!.id, dummy);
    navigate("/");
  };
  const removeClick = () => {
    removeRoutine(targetRoutine!.id);
    navigate("/");
  };
  const handleClickDay = (value: number) => {
    const index = selectedDays.indexOf(value);
    if (index === -1) {
      setSelectedDays([...selectedDays, value]);
    } else {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== value)
      );
    }
  };
  selectedDays.sort((a, b) => a - b);

  const handleClickBtn = (colorNum: string) => {
    setColorNum(colorNum);
  };
  const handleCheckRoutine = (option: string) => {
    setSelectRoutine(option);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NewHeader>Detail</NewHeader>
      <NewSection>
        <TextField
          required
          id="Routine Title"
          label="루틴 제목"
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            width: "200px",
            "& .MuiFormLabel-root": FontStyle,
            "& .MuiInputBase-root": FontStyle,
          }}
        />
        <TimePicker
          label="시간"
          value={time}
          onChange={(newValue) => setTime(newValue as Dayjs)}
          sx={{
            width: "200px",
            margin: "5% 0 3% 0",
            "& .MuiFormLabel-root": FontStyle,
            "& .MuiInputBase-root": FontStyle,
          }}
        />
        <DatePickerDiv>
          <DatePicker
            format="YYYY / MM / DD"
            label="시작일"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue as Dayjs)}
            sx={{
              width: "200px",
              marginRight: "10px",
              "& .MuiFormLabel-root": FontStyle,
              "& .MuiInputBase-root": FontStyle,
            }}
          />
          <DatePicker
            format="YYYY / MM / DD"
            label="종료일"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue as Dayjs)}
            sx={{
              width: "200px",
              marginLeft: "10px",
              "& .MuiFormLabel-root": FontStyle,
              "& .MuiInputBase-root": FontStyle,
            }}
          />
        </DatePickerDiv>
      </NewSection>
      <ButtonGroup>
        {colors.map((it) => (
          <ColorButton
            key={it.color_id}
            {...it}
            onClick={handleClickBtn}
            isSelect={it.color === colorNum}
          />
        ))}
      </ButtonGroup>
      <RoutineRadio
        selectRoutine={selectRoutine}
        handleCheckRoutine={handleCheckRoutine}
        selectedDays={selectedDays}
        handleClickDay={handleClickDay}
        setSelectedDays={setSelectedDays}
        colorNum={colorNum}
      />
      <CenteredDiv>
        <Btn onClick={updateClick}>수정 완료</Btn>
        <Btn onClick={removeClick}>삭제</Btn>
      </CenteredDiv>
    </LocalizationProvider>
  );
}
const NewHeader = styled.div`
  margin: 5%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  border-bottom: 1px solid #6f6f6f;
  padding-bottom: 3%;
`;
const NewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
`;
const DatePickerDiv = styled.div``;
const ButtonGroup = styled.section`
  text-align: center;
  margin: 5% 0;
`;
const FontStyle = {
  fontFamily: '"Poor Story", system-ui',
  fontWeight: "bold",
};
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 6% 0;
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
