import { styled } from "styled-components";
import { useRoutineStore } from "../zustand/userRoutine";
import { useDateStore } from "../zustand/useDate";
import Calender from "../components/Calender";
import { RoutineList } from "../components/RoutineList";
import { setRoutinesSort } from "../util/setRoutinesSort";
import { Header } from "../components/Header";

export function Home() {
  const { curDate, setCurDate } = useDateStore();
  const { routines } = useRoutineStore();

  const sortRoutine = setRoutinesSort(routines);
  console.log(routines);
  return (
    <HomeSection>
      <Header curDate={curDate} setCurDate={setCurDate} />
      <Calender routines={sortRoutine} />
      <RoutineList routines={sortRoutine} />
    </HomeSection>
  );
}
const HomeSection = styled.section``;
