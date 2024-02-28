import { styled } from "styled-components";
import { Routine } from "../types/routineType";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { useState } from "react";
interface RenderRoutineDetailProps {
  curDate: Date;
  routine: Routine;
}

export function RenderRoutineDetail({
  routine: { id, Color, Time, Title },
}: RenderRoutineDetailProps) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    // 클릭이 발생할 때마다 checked 상태를 토글합니다.
    setChecked(!checked);
  };

  return (
    <RoutineDetail key={id} color={Color}>
      <Detail>
        {Time}
        <RoutineTitle>{Title}</RoutineTitle>
        <Icon onClick={handleClick}>
          {checked ? (
            <MdCheckBox /> // Success가 true일 때 체크된 아이콘을 표시합니다.
          ) : (
            <MdOutlineCheckBoxOutlineBlank /> // Success가 false일 때 체크되지 않은 아이콘을 표시합니다.
          )}
        </Icon>
      </Detail>
    </RoutineDetail>
  );
}

const RoutineDetail = styled.div`
  margin-bottom: 2%;
  font-size: 20px;

  // background-color: ${(props) => props.color};
`;
const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ececec;
  width: 100%;
`;
const RoutineTitle = styled.div`
  font-weight: bold;
`;
const Icon = styled.div`
  cursor: pointer;
`;
