import { create } from "zustand";

interface DateType {
  curDate: Date;
  setCurDate: (newData: Date) => void;
}

export const useDateStore = create<DateType>((set) => ({
  curDate: new Date(2024, 1, 1),
  setCurDate: (newDate) => set({ curDate: newDate }),
}));
