// DateCell.tsx
import React from "react";
import styled from "styled-components";

interface DateCellProps {
  date: number;
  condition: string;
  todayCheck: string;
  emotion?: string;
}

const StyledDateCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &.today {
    background-color: lightblue;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+0lEQVR4nO1ZTW/TQBC1gHLgyMeJwr8Alf/QQouEQPBDQPyA8iFugFpU+gHHIkigLRcOkThk36QWEom5wYHEu62g5ZxwWTROU4ni1Lv2xg5SRhopkWPve5PZmbdjzxvZyEaW2Vb16lEK6RIk7kLitZD0BYp+CYnf7HufA74W/WYbE1rrI17RVgtr56BwH4pCKNI2LhS1oHAPLYznDvyj+nQGip4JhY4t8H+JoCMk5nzpn84FPEm6CUW7WYHHENkRobgxMOC+9segsOAaOA4SkTTPa7kFL/0TkHg/aPDouaQNXtNd5PMEr3qOD0EQHM9MII+0Qd90wlwm8FVJt4oCjx6JsHY9FXgK6ZRQ+Fk0ASjaTVViuc7nCXTt23r/6xJP7cC3MO6iSZn6UuOFvly+qmfxID6NFDq+9M9bRD+SB7mAXw664CdL05H3I8Gywwg8i6yuTskBfGPlL/Ds/P3d19h0Clk0JhKIVGUBkZ8sTeup8ox+Xl/qe091a/Nicvqw3B1C8OjKjDuJBITCmyLAL9QXE+8Vkl4lE+CDxxCCB7ukenIKWUjlPpvNeMNOlWf0YmPZ+BncWE1SyKj+P9x8ZBy9zJFXPUfbCQEGbwqEwV956wI8mRFISiFOG9NU6HXYLGkD6xQy2MQmKbESvHQYeTLfxKZl9LDUGAh4ZVhGbRpZv8oS26QahzcpmBG4nUxgGxM2D437J1xHHnteU7ULhmIOTZsHx6WMa/BC4bvxNC+amFkucJCES/DoTvJmjcBnOdD0SLgGD4V2tVk969kYTwTSLMZ7IklVpoj+Y8/Wqs3qyWE41AuFndRzU55VFk2AtuhaKvD7JCTNFxZ9SU+8rMbnUKGoVAD49YquHPPcDXdpIz/wWHM23N0nof2xtJXJNm0qriIfZzyrHEh1kviRecPazE153McNJjt4tLnOc9n28jbujiw7bLVTlCoKTZYH1h12EMYii4dOPLdhzc4HDz7ZRS/wupKET3mf+RpLYlaVQ/GadWQj8/5/+wO4yRM6vdI5mQAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: 25px 25px;
    background-position-x: 10px;
  }

  // ... (기타 스타일)
`;

const DateCell: React.FC<DateCellProps> = ({
  date,
  condition,
  todayCheck,
  emotion,
}) => {
  return (
    <StyledDateCell className={`date ${todayCheck}`}>
      <span className={condition}>{date}</span>
      {emotion && (
        <img
          className="CalenderEmotion"
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt={`emotion-${emotion}`}
        />
      )}
    </StyledDateCell>
  );
};

export default DateCell;
