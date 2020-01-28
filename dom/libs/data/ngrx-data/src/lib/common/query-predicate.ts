export type WhereFilterOpEx =
  | '<'
  | '<='
  | '=='
  | '>='
  | '>'
  | 'array-contains'
  | 'in'
  | 'array-contains-any';

export class QueryPredicate<T> {
  constructor(
    readonly fieldPath: string,
    readonly opStr: WhereFilterOpEx,
    readonly value: T | undefined
  ) {
    if (!this.fieldPath) {
      throw new Error('QueryPredicate<T>(): fieldPath must be specified');
    }
    if (!this.opStr) {
      throw new Error('QueryPredicate<T>(): opStr must be specified');
    }
  }

  toString(): string {
    return JSON.stringify(this);
  }
}

export class QueryPredicates extends Array<QueryPredicate<any>> {
  toString(): string {
    return JSON.stringify(this);
  }
}
