import { Fragment, ReactNode } from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '../../features/utils';
import format from 'date-fns/esm/format';
import { JsxChild } from 'typescript/lib/tsserverlibrary';

export default function CalendarHeader({
  today,
  children,
}: {
  today: Date;
  children?: ReactNode[];
}) {
  const header = format(today, 'MMMM yyy');
  const dateTime = format(today, 'yyy-MM-dd');
  return (
    <header className="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
      <div className="flex items-center rounded-md shadow-sm md:items-stretch flex-1">
        <button
          type="button"
          className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
        >
          Today
        </button>
        <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
        <button
          type="button"
          className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <h1 className="text-lg font-semibold text-gray-900 flex-1 text-center">
        <time dateTime={dateTime}>{header}</time>
      </h1>
      <div className="flex-1">{children}</div>
    </header>
  );
}
