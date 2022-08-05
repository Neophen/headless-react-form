export interface IDay {
  weekday?: string;
  date: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
}

export interface IEvent {
  id: number;
}
