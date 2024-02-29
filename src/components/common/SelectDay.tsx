import { styled } from "styled-components";

interface SelectDaysProps {
  value: string | number;
  onClick: (value: string | number) => void;
  isSelect: boolean;
  color: string;
}
export const SelectDay = ({
  value,
  onClick,
  isSelect,
  color,
}: SelectDaysProps) => {
  return (
    <StyledButton
      onClick={() => onClick(value)}
      className={isSelect ? "selected" : ""}
      color={color}
    >
      {value}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 18px;
    margin: 2px 2px;
    width: 25px;
    border: none;
    color: black;
  background-color: white;
  border-radius: 10px;
  font-family: "Poor Story";

  &.selected {
    background-color: ${(props) => props.color};
`;
