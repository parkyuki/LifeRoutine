import { Routine } from "../types/routineType";
interface SortedRoutines {
  dailyRoutines: Routine[];
  weeklyRoutines: Routine[];
  monthlyRoutines: Routine[];
}

export const setRoutinesSort = (newRoutines: Routine[]): Routine[] => {
  const sortedRoutines: SortedRoutines = {
    dailyRoutines: [],
    weeklyRoutines: [],
    monthlyRoutines: [],
  };

  newRoutines.forEach((routine) => {
    if ("Daily" in routine) {
      sortedRoutines.dailyRoutines.push(routine);
    } else if ("Weekly" in routine) {
      sortedRoutines.weeklyRoutines.push(routine);
    } else if ("Monthly" in routine) {
      sortedRoutines.monthlyRoutines.push(routine);
    }
  });

  // sortedRoutines의 daily, weekly, monthly 배열을 합쳐서 반환
  return [
    ...sortedRoutines.dailyRoutines,
    ...sortedRoutines.weeklyRoutines,
    ...sortedRoutines.monthlyRoutines,
  ];
};
