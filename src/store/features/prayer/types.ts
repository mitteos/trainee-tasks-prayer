export interface PrayerState {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
}

interface ColumnState {
  id: number;
  title: string;
  description: string;
}
export interface AddPrayerResponse{
  id: number;
  title: string;
  description: string;
  checked: boolean;
  column: ColumnState
}
