import * as React from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import styled from "styled-components";
import { useDateStore } from "../zustand/useDate";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { colors } from "../util/colorsSet";
import { ColorButton } from "../components/ColorButton";

export interface INewProps {}

export function New(props: INewProps) {
  const { curDate } = useDateStore();
  const [colorNum, setColorNum] = useState<string>();
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<Dayjs>(dayjs(curDate));
  const [ampm, setAmpm] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs>(dayjs(curDate));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(curDate));

  //const formattedDate: Date = value.toDate();
  useEffect(() => {
    //const formattedDate = time.format("A hh:mm ");
    const formattedDate = startDate.format("YYYY-MM-DD ");
    console.log("startDate", formattedDate);
  }, [startDate]);

  const handleClickBtn = (colorNum: string) => {
    setColorNum(colorNum);
  };
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleAmPm = (event: SelectChangeEvent<string>) => {
    setAmpm(event.target.value);
  };
  const handleTime = (newTime: Dayjs | null, _context: any) => {
    if (newTime) {
      setTime(newTime);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NewSection>
        <TextField
          required
          id="Routine Title"
          label="루틴 제목"
          size="small"
          variant="standard"
          value={title}
          onChange={handleTitle}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="AmPm-standard-label">오전오후</InputLabel>
          <Select
            id="AmPm-standard-label"
            value={ampm}
            onChange={handleAmPm}
            label="AmPm"
          >
            <MenuItem value={"오전"}>오전</MenuItem>
            <MenuItem value={"오후"}>오후</MenuItem>
          </Select>
        </FormControl>
        <TimePicker label="시간" value={time} onChange={handleTime} />
        <DatePicker
          format="YYYY / MM / DD"
          label="Controlled picker"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue as Dayjs)}
        />
        <DatePicker
          format="YYYY / MM / DD"
          label="Controlled picker"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
        />
      </NewSection>
      {colors.map((it) => (
        <ColorButton
          key={it.color_id}
          {...it}
          onClick={handleClickBtn}
          isSelect={it.color === colorNum}
        />
      ))}
    </LocalizationProvider>
  );
}

const NewSection = styled.section`
  margin: 3%;
`;
