export const trim = (value: string, size=19): string => value.length < size 
  ? value
  : `${value.slice(0, size-6)}...${value.slice(value.length - 3)}`;