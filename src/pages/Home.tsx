import Calender from "../components/Calender";
import { useRoutineStore } from "../zustand/userRoutine";
import { useDateStore } from "../zustand/useDate";
import { styled } from "styled-components";

export function Home() {
  const { curDate, setCurDate } = useDateStore();
  const { routines } = useRoutineStore();

  return (
    <App>
      <Calender curDate={curDate} routines={routines} />
    </App>
  );
}
const App = styled.div`
  min-height: 100vw;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 650px) {
    width: 640px;
  }
  @media (max-width: 650px) {
    width: 90vw;
  }
`;
