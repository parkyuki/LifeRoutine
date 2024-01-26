import { create } from "zustand";
import { RoutineType } from "../types/routineType";

export const useRoutineStore = create<RoutineType>((set) => ({
  routines: [
    {
      AmPm: "PM",
      H: "7",
      M: "45",
      Title: "Morning Routine",
      StartDate: new Date(),
      EndDate: new Date(),
      Color: "#FF0000",
      Monthly: [1, 15, 21, 24], // 예시: 1일과 15일
    },
    {
      AmPm: "PM",
      H: "7",
      M: "45",
      Title: "Evening Routine",
      StartDate: new Date(),
      EndDate: new Date(),
      Color: "#00FF00",
      Weekly: [0, 3], // 예시: 일요일과 수요일
    },
    {
      AmPm: "PM",
      H: "7",
      M: "45",
      Title: "Evening Routine",
      StartDate: new Date(),
      EndDate: new Date(),
      Color: "#00c7ff",
      Daily: [], // 예시: 일요일과 수요일
    },
  ],

  addRoutine: (routine) =>
    set((state) => ({
      routines: [...state.routines, routine],
    })),

  removeRoutine: (index) =>
    set((state) => ({
      routines: state.routines.filter((_, i) => i !== index),
    })),

  updateRoutine: (index, updatedRoutine) =>
    set((state) => {
      const updatedRoutines = [...state.routines];
      updatedRoutines[index] = updatedRoutine;
      return { routines: updatedRoutines };
    }),
}));
