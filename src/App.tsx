/* This example requires Tailwind CSS v2.0+ */
import { classNames } from './features/utils';
import CalendarHeader from './components/calendar/CalendarHeader';
import CalendarWeeksHeader from './components/calendar/CalendarWeeksHeader';
import CalendarDay from './components/calendar/CalendarDay';
import { Calendar } from './components/calendar/Calendar';
import { IDay } from './types/types';
import ShiftPaternEvent from './components/shift_paterns/ShiftPaternEvent';

const days: IDay[] = [
  { date: '2021-12-27', weekday: 'MON' },
  { date: '2021-12-28', weekday: 'TUE' },
  { date: '2021-12-29', weekday: 'WED' },
  { date: '2021-12-30', weekday: 'THU' },
  { date: '2021-12-31', weekday: 'FRI' },
  { date: '2022-01-01', isCurrentMonth: true, weekday: 'SUN' },
  { date: '2022-01-02', isCurrentMonth: true, weekday: 'SAT' },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  {
    date: '2022-01-07',
    isCurrentMonth: true,
  },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  {
    date: '2022-01-12',
    isCurrentMonth: true,
    isToday: true,
  },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  {
    date: '2022-01-22',
    isCurrentMonth: true,
    isSelected: true,
  },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  {
    date: '2022-02-03',
  },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
];

const shiftPaternEvents = [
  {
    id: 1,
    title: 'RS-001',
    count: 5,
    type: 'regular',
    color: 'red',
    date: '2022-02-03',
  },
  {
    id: 2,
    title: 'RS-002',
    count: 5,
    type: 'regular',
    color: 'red',
    date: '2022-01-07',
  },
  {
    id: 3,
    title: 'RS-003',
    count: 5,
    type: 'regular',
    color: 'blue',
    date: '2022-01-07',
  },
  {
    id: 4,
    title: 'RS-004',
    count: 5,
    type: 'regular',
    color: 'green',
    date: '2022-01-07',
  },
  {
    id: 5,
    title: 'RS-005',
    count: 5,
    type: 'regular',
    color: 'red',
    date: '2022-01-07',
  },
  {
    id: 6,
    title: 'RS-006',
    count: 5,
    type: 'temporary',
    color: 'red',
    date: '2022-01-07',
  },
  {
    id: 7,
    title: 'RS-007',
    count: 5,
    type: 'day-off',
    color: 'red',
    date: '2022-01-07',
  },
];

export default function App() {
  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      {/* <CalendarHeader /> */}
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        {/* <CalendarWeeksHeader /> */}
        {/* <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="w-full grid grid-cols-7 grid-rows-6 gap-px">
            {days.map((day) => (
              <CalendarDay day={day} />
            ))}
          </div>
        </div> */}
      </div>
      {/* <Calendar.DayContent>
          {(day) => <ShiftPaternEvent day={day} events={shiftPaternEvents} />}
        </Calendar.DayContent> */}
      <Calendar></Calendar>
    </div>
  );
}
