import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "styled-components";
import { days, weekday } from "../../util/days";
import { SelectDay } from "./SelectDay";

interface SelectRoutineProps {
  selectRoutine: string;
  handleCheckRoutine: (option: string) => void;
  selectedDays: number[];
  handleClickDay: (value: number) => void;
  setSelectedDays: React.Dispatch<React.SetStateAction<number[]>>;
  colorNum: string;
}

export default function RoutineRadio({
  selectRoutine,
  handleCheckRoutine,
  selectedDays,
  handleClickDay,
  setSelectedDays,
  colorNum,
}: SelectRoutineProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDays([]);
    handleCheckRoutine(event.target.value);
  };
  return (
    <RadioSection>
      <RoutineRadioArticle>
        <FormLabel sx={{ fontFamily: '"Poor Story", system-ui' }}>
          루틴 주기
        </FormLabel>
        <RadioGroup value={selectRoutine} onChange={handleChange}>
          <FormControlLabelA
            value="Daily"
            control={<Radio size="small" />}
            label="Daily"
          />
          <FormControlLabelA
            value="Weekly"
            control={<Radio size="small" />}
            label="Weekly"
          />
          <FormControlLabelA
            value="Monthly"
            control={<Radio size="small" />}
            label="Monthly"
          />
        </RadioGroup>
      </RoutineRadioArticle>
      <SelectArticle>
        {selectRoutine === "Daily" && (
          <DailyMsg>Daily는 매일 반복됩니다.</DailyMsg>
        )}
        {selectRoutine === "Weekly" && (
          <WeeklyBtn>
            {weekday.map((it, index) => (
              <SelectDay
                key={index}
                value={it}
                onClick={() => handleClickDay(index)}
                isSelect={selectedDays.includes(index)}
                color={colorNum}
              />
            ))}
          </WeeklyBtn>
        )}
        {selectRoutine === "Monthly" && (
          <MonthlyBtn>
            {days.map((day) => (
              <SelectDay
                key={day}
                value={day}
                onClick={() => handleClickDay(day)}
                isSelect={selectedDays.includes(day)}
                color={colorNum}
              />
            ))}
          </MonthlyBtn>
        )}
      </SelectArticle>
    </RadioSection>
  );
}

const RadioSection = styled.section`
  margin: 10px;
  display: flex;
  align-items: center;
`;
const RoutineRadioArticle = styled.article`
  margin: 0 80px 0 110px;
`;
const SelectArticle = styled.article``;

const FormControlLabelA = styled(FormControlLabel)<FormControlLabelProps>(
  () => ({
    "& .MuiTypography-root": { fontFamily: '"Poor Story", system-ui' },
  })
);

const DailyMsg = styled.div`
  font-weight: bold;
`;
const WeeklyBtn = styled.div`
  border: 1px solid #8b8b8b;
  border-radius: 10px;
  padding: 3%;
  width: 224px;

  button {
    width: 28px;
    font-size: 18px;
    margin: 0px 2px;
  }
`;

const MonthlyBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 232px;
  border: 1px solid #b9b9b9;
  padding: 6px;
  border-radius: 10px;
`;
