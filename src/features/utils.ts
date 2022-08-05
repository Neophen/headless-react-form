type IClass = string | undefined;

export function classNames(...classes: IClass[]) {
  return classes.filter(Boolean).join(' ');
}
