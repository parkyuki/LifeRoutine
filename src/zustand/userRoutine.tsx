import { create } from "zustand";
import { RoutineType } from "../types/routineType";

export const useRoutineStore = create<RoutineType>((set) => ({
  routines: [
    {
      id: 1,
      Time: "PM 03:24",
      Title: "청소",
      StartDate: "2024-01-01",
      EndDate: "2024-12-26",
      Color: "#ff000091",
      Monthly: [1, 15, 21, 24], // 예시: 1일과 15일
    },
    {
      id: 2,
      Time: "PM 03:24",
      Title: "운동",
      StartDate: "2024-01-26",
      EndDate: "2024-12-26",
      Color: "#2aff006e",
      Weekly: [0, 3], // 예시: 일요일과 수요일
    },
    {
      id: 3,
      Time: "PM 03:24",
      Title: "영양제 먹기",
      StartDate: "2024-01-26",
      EndDate: "2024-12-26",
      Color: "#00c7ff75",
      Daily: [], // 예시: 일요일과 수요일
    },
  ],
  addRoutine: (routine) =>
    set((state) => {
      const newRoutines = [...state.routines, { ...routine }];
      console.log("추가 성공");
      return { routines: newRoutines };
    }),

  removeRoutine: (id) =>
    set((state) => ({
      routines: state.routines.filter((routine) => routine.id !== id),
    })),

  updateRoutine: (id, updatedRoutine) =>
    set((state) => {
      const newRoutines = state.routines.map((routine) =>
        routine.id === id ? { ...routine, ...updatedRoutine } : routine
      );
      return { routines: newRoutines };
    }),
}));
