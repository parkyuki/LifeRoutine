import { styled } from "styled-components";

interface SelectDaysProps {
  value: string | number;
  onClick: (value: string | number) => void;
  isSelect: boolean;
}
export const SelectDay = ({ value, onClick, isSelect }: SelectDaysProps) => {
  return (
    <StyledButton
      onClick={() => onClick(value)}
      className={isSelect ? "selected" : ""}
    >
      {value}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 25px;
  border: none;
  color: black;
  background-color: white;
  border-radius: 10px;
  font-family: "Poor Story";

  &.selected {
    background-color: blue;
  }
`;
