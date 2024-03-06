import { create } from "zustand";
import { RoutineType } from "../types/routineType";

export const useRoutineStore = create<RoutineType>((set) => {
  const storedRoutines = localStorage.getItem("routines");
  const initialRoutines = storedRoutines ? JSON.parse(storedRoutines) : [];

  set({ routines: initialRoutines });

  return {
    routines: initialRoutines,
    addRoutine: (routine) =>
      set((state) => {
        const newRoutines = [...state.routines, { ...routine }];
        localStorage.setItem("routines", JSON.stringify(newRoutines));
        return { routines: newRoutines };
      }),

    removeRoutine: (id) =>
      set((state) => {
        const newRoutines = state.routines.filter(
          (routine) => routine.id !== id
        );
        localStorage.setItem("routines", JSON.stringify(newRoutines));
        return { routines: newRoutines };
      }),

    updateRoutine: (id, updatedRoutine) =>
      set((state) => {
        const newRoutines = state.routines.map((routine) =>
          routine.id === id ? { ...routine, ...updatedRoutine } : routine
        );
        localStorage.setItem("routines", JSON.stringify(newRoutines));
        return { routines: newRoutines };
      }),
  };
});

export default useRoutineStore;
