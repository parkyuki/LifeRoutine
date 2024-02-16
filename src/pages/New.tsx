import * as React from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import styled from "styled-components";
import { useDateStore } from "../zustand/useDate";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export interface INewProps {}

export function New(props: INewProps) {
  const { curDate, setCurDate } = useDateStore();
  const [value, setValue] = useState<Dayjs>(dayjs(curDate));
  const formattedDate: Date = value.toDate();
  console.log("formattedDate", formattedDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NewSection>
        <TextField
          required
          id="Routine Title"
          label="루틴 제목"
          size="small"
          variant="standard"
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="AmPm-standard-label">오전오후</InputLabel>
          <Select
            id="AmPm-standard-label"
            // value={age}
            // onChange={handleChange}
            label="AmPm"
          >
            <MenuItem value={"오전"}>오전</MenuItem>
            <MenuItem value={"오후"}>오후</MenuItem>
          </Select>
        </FormControl>
        <TimePicker
          label="시간"
          //value={value}
          //onChange={(newValue) => setValue(newValue)}
        />
        <DatePicker
          format="YYYY / MM / DD"
          label="Controlled picker"
          value={value}
          //onChange={(newValue) => setValue(newValue)}
        />
        <DatePicker
          format="YYYY / MM / DD"
          label="Controlled picker"
          value={value}
          //onChange={(newValue) => setValue(newValue)}
        />
      </NewSection>
    </LocalizationProvider>
  );
}

const NewSection = styled.section`
  margin: 3%;
`;
