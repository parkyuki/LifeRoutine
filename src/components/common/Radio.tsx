import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
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
}

export default function RoutineRadio({
  selectRoutine,
  handleCheckRoutine,
  selectedDays,
  handleClickDay,
  setSelectedDays,
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
        {selectRoutine === "Daily" && <div>daily</div>}
        {selectRoutine === "Weekly" && (
          <div>
            {weekday.map((it, index) => (
              <SelectDay
                key={index}
                value={it}
                onClick={() => handleClickDay(index)}
                isSelect={selectedDays.includes(index)}
              />
            ))}
          </div>
        )}
        {selectRoutine === "Monthly" && (
          <StyledButtonGroup>
            {days.map((day) => (
              <SelectDay
                key={day}
                value={day}
                onClick={() => handleClickDay(day)}
                isSelect={selectedDays.includes(day)}
              />
            ))}
          </StyledButtonGroup>
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
  margin: 0 80px;
`;
const SelectArticle = styled.article``;

const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  height: 100px;
  border: 1px solid #b9b9b9;
  padding: 6px;
`;
const FormControlLabelA = styled(FormControlLabel)<FormControlLabelProps>(
  () => ({
    "& .MuiTypography-root": { fontFamily: '"Poor Story", system-ui' },
  })
);
