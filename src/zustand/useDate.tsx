import { create } from "zustand";

export interface DateType {
  curDate: Date;
  setCurDate: (newData: Date) => void;
}

export const useDateStore = create<DateType>((set) => ({
  curDate: new Date(2024, 1, 3),
  setCurDate: (newDate) => set({ curDate: newDate }),
}));
