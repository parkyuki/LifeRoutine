import { styled } from "styled-components";
import { Routine } from "../types/routineType";
import { useRoutineStore } from "../zustand/userRoutine";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { useState } from "react";

export function RenderRoutineDetail({
  id,
  Color,
  AmPm,
  H,
  M,
  Title,
  Success,
}: Routine) {
  const { toggleRoutineSuccess } = useRoutineStore();
  const [check, setCheck] = useState(false);
  return (
    <RoutineDetail key={id} color={Color}>
      <Detail>
        {AmPm + " "}
        {H} : {M}
        <RoutineTitle>{Title}</RoutineTitle>
        {/* {Success ? (
          <Icon onClick={() => toggleRoutineSuccess(id)}>
            <MdCheckBox />
          </Icon>
        ) : (
          <Icon onClick={() => toggleRoutineSuccess(id)}>
            <MdOutlineCheckBoxOutlineBlank />
          </Icon>
        )} */}
        {check ? (
          <Icon onClick={() => setCheck(!check)}>
            <MdCheckBox />
          </Icon>
        ) : (
          <Icon onClick={() => setCheck(!check)}>
            <MdOutlineCheckBoxOutlineBlank />
          </Icon>
        )}
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
