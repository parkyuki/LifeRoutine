export interface Basic {
  AmPm: string;
  H: string;
  M: string;
  Title: string;
  StartDate: Date;
  EndDate: Date;
  Color: string;
}

export interface Monthly extends Basic {
  Monthly: number[];
}
export interface Weekly extends Basic {
  Weekly: number[];
}
export interface Daily extends Basic {
  Daily: number[];
}

export type Routine = Monthly | Weekly | Daily;

export interface RoutineType {
  routines: Routine[];
  addRoutine: (routine: Routine) => void;
  removeRoutine: (index: number) => void;
  updateRoutine: (index: number, updatedRoutine: Routine) => void;
}
