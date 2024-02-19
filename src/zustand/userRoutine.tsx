import { create } from "zustand";
import { RoutineType } from "../types/routineType";

let id = 3;
export const useRoutineStore = create<RoutineType>((set) => ({
  routines: [
    {
      id: 1,
      AmPm: "PM",
      H: "7",
      M: "45",
      Title: "청소",
      StartDate: new Date(2024, 0, 1),
      EndDate: new Date(2024, 11, 31),
      Color: "#ff000091",
      Monthly: [1, 15, 21, 24], // 예시: 1일과 15일
    },
    {
      id: 2,
      AmPm: "PM",
      H: "7",
      M: "45",
      Title: "운동",
      StartDate: new Date(2024, 0, 1),
      EndDate: new Date(2024, 11, 31),
      Color: "#2aff006e",
      Weekly: [0, 3], // 예시: 일요일과 수요일
    },
    {
      id: 3,
      AmPm: "PM",
      H: "7",
      M: "45",
      Title: "영양제 먹기",
      StartDate: new Date(2024, 0, 1),
      EndDate: new Date(2024, 11, 31),
      Color: "#00c7ff75",
      Daily: [], // 예시: 일요일과 수요일
    },
  ],
  addRoutine: (routine) =>
    set((state) => {
      const newRoutines = [...state.routines, { ...routine, id: id++ }];
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
