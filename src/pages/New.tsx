import * as React from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { useDateStore } from "../zustand/useDate";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { colors } from "../util/colorsSet";
import { ColorButton } from "../components/NewPage/ColorButton";
import RoutineRadio from "../components/NewPage/Radio";
import CreateBtn from "../components/NewPage/CreateBtn";

export interface INewProps {}

export function New(props: INewProps) {
  const { curDate } = useDateStore();
  const [colorNum, setColorNum] = useState<string>("#ececec");
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<Dayjs>(dayjs(curDate));
  const [startDate, setStartDate] = useState<Dayjs>(dayjs(curDate));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs(curDate));
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [selectRoutine, setSelectRoutine] = useState("Daily");

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
      <NewHeader>{curDate.toLocaleDateString()} 루틴</NewHeader>
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
        <CreateBtn
          time={time}
          startDate={startDate}
          endDate={endDate}
          title={title}
          colorNum={colorNum}
          selectedDays={selectedDays}
          selectRoutine={selectRoutine}
        />
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
