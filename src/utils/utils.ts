
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function has(item: string | any, postfixStr?: string): string {
  if (item && item === 'undefined') {
    return '';
  }
  return postfix(item ? `has-${item}` : '', postfixStr);
}

export function is(item: string | any, postfixStr?: string): string {
  if (item && item === 'undefined') {
    return '';
  }
  return postfix(item ? `is-${item}` : '', postfixStr);
}

export function isOffset(item: string | any, postfixStr?: string): string {
  if (item && item === 'undefined') {
    return '';
  }
  return postfix(item ? `is-offset-${item}` : '', postfixStr);
}

export function are(item: string | any): string {
  return item ? `are-${item}` : '';
}

export function hasText(item: string | any): string {
  return item ? `has-text-${item}` : '';
}

export function strFromArr(arr: string[]): string {
  return arr.filter(d => d).join(' ');
}

export function postfix(item: string, end: string): string {
  if (!end) {
    return item;
  }
  return item ? `${item}-${end}` : '';
}

export function fromBoolean(bool: boolean | any, key: string): string {
  return bool ? key : '';
}
