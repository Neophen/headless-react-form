import { IDay, IEvent } from '../../types/types';
import { classNames } from '../features/utils';

export default function CalendarDayEvent({ event }: { event: IEvent }) {
  const dayNumber = day.date?.split('-')?.pop()?.replace(/^0/, '') || 0;
  return (
    <ol className="mt-2">
      {day.events.map((event) => (
        <li key={event.id}>
          <a href={event.href} className="group flex">
            <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
              {event.name}
            </p>
            <time
              dateTime={event.datetime}
              className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
            >
              {event.time}
            </time>
          </a>
        </li>
      ))}
    </ol>
  );
}
