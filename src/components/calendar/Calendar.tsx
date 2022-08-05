import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import startOfToday from 'date-fns/esm/startOfToday';
import startOfWeek from 'date-fns/esm/startOfWeek';
import endOfWeek from 'date-fns/esm/endOfWeek';
import CalendarHeader from './CalendarHeader';
import CalendarDay from './CalendarDay';
import addDays from 'date-fns/addDays';

function DayContent({ day }) {
  return <p>{day}</p>;
}

function CalendarRoot() {
  const today = startOfToday();
  const lastMonthDay = endOfWeek(endOfMonth(today));
  let days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(today)),
    end: lastMonthDay,
  });

  if (days.length < 36) {
    const fillerDays = eachDayOfInterval({
      start: addDays(lastMonthDay, 1),
      end: addDays(lastMonthDay, 7),
    });
    days = [...days, ...fillerDays];
  }

  return (
    <div>
      <CalendarHeader today={today} />
      <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
        <div className="w-full grid grid-cols-7 grid-rows-6 gap-px">
          {days.map((day) => (
            <CalendarDay key={day.toString()} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
}

export let Calendar = Object.assign(CalendarRoot, { DayContent });
