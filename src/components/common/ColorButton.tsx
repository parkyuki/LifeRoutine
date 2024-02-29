import { styled } from "styled-components";

interface ColorButtonProps {
  color_id: string;
  colorName: string;
  color: string;
  onClick: (color: string) => void;
  isSelect: boolean;
}

export const ColorButton = ({
  colorName,
  color,
  onClick,
  isSelect,
}: ColorButtonProps) => {
  return (
    <ColorBtn
      onClick={() => onClick(color)}
      color={color}
      className={isSelect ? "selected" : ""}
    >
      {colorName}
    </ColorBtn>
  );
};

const ColorBtn = styled.button`
  background-color: ${(props) => props.color};
  width: 70px;
  height: 35px;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Poor Story", system-ui;
  font-weight: bold;
  margin-right: 5px;
  &.selected {
    border: 4px solid ${(props) => props.color};
  }
`;
