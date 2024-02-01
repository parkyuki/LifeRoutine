import Calender from "../components/Calender";
import { useRoutineStore } from "../zustand/userRoutine";
import { useDateStore } from "../zustand/useDate";
import { styled } from "styled-components";
import { setRoutinesSort } from "../util/setRoutinesSort";

export function Home() {
  const { curDate, setCurDate } = useDateStore();
  const { routines } = useRoutineStore();

  const sortRoutine = setRoutinesSort(routines);

  return (
    <App>
      <Calender curDate={curDate} routines={sortRoutine} />
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
