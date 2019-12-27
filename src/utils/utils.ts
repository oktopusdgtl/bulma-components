
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function is(item: string): string {
  return item ? `is-${item}` : '';
}

export function are(item: string): string {
  return item ? `are-${item}` : '';
}

export function hasText(item: string): string {
  return item ? `has-text-${item}` : '';
}

export function strFromArr(arr: string[]): string {
  return arr.filter(d => d).join(' ');
}

export function fromBoolean(bool: boolean, key: string): string {
  return bool ? key : '';
}
