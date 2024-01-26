import { create } from "zustand";

interface DateType {
  curDate: Date;
  setCurDate: (newData: Date) => void;
}

export const useDateStore = create<DateType>((set) => ({
  curDate: new Date(),
  setCurDate: (newDate) => set({ curDate: newDate }),
}));
