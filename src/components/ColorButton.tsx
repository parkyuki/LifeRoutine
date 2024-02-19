import { styled } from "styled-components";

interface ColorButtonProps {
  color_id: string;
  colorName: string;
  color: string;
  onClick: (color: string) => void;
  isSelect: boolean;
}

export const ColorButton = ({
  color_id,
  colorName,
  color,
  onClick,
  isSelect,
}: ColorButtonProps) => {
  return (
    <ColorBtn
      onClick={() => onClick(color)}
      style={{ backgroundColor: color }}
      className={isSelect ? "selected" : ""}
    >
      {colorName}
    </ColorBtn>
  );
};

const ColorBtn = styled.button`
  background-color: ${(props) => props.color};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.selected {
    font-weight: bold;
    border: 1px solid;
  }
`;
