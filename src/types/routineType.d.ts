export interface Basic {
  id: number;
  Time: string;
  Title: string;
  StartDate: string;
  EndDate: string;
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
