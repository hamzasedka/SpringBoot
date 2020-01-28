export interface Filter<T> {
  readonly type: string;

  filter(input: T[]): T[];
}
