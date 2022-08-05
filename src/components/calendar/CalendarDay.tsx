import format from 'date-fns/esm/format';
import isToday from 'date-fns/esm/isToday';
import { classNames } from '../../features/utils';
import { IDay } from '../../types/types';

export default function CalendarDay({ day }: { day: Date }) {
  const dayNumber = format(day, 'd');
  const hasWeekday = false;
  const isCurrentMonth = true;
  const weekDay = 'mon';
  const isDayToday = isToday(day);
  const dateTime = format(day, 'yyyy-MM-dd');

  return (
    <div
      className={classNames(
        isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500',
        'relative p-1 h-[125px]'
      )}
    >
      <div className="grid place-items-center grid-rows-2">
        {hasWeekday && <div className="leading-5">{weekDay}</div>}
        <time
          dateTime={dateTime}
          className={classNames(
            'flex h-6 w-6 items-center justify-center',
            isDayToday
              ? 'rounded-full bg-indigo-600 font-semibold text-white'
              : undefined
          )}
        >
          {dayNumber}
        </time>
      </div>
    </div>
  );
}
