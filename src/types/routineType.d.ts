export interface Basic {
  id: number;
  AmPm: string;
  H: string;
  M: string;
  Title: string;
  StartDate: Date;
  EndDate: Date;
  Color: string;
  Success: boolean;
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
  toggleRoutineSuccess: (id: number) => void;
  addRoutine: (routine: Routine) => void;
  removeRoutine: (index: number) => void;
  updateRoutine: (index: number, updatedRoutine: Routine) => void;
}
