export class ObjectHelper {
  static filter<T, U, V>(
    array: T[],
    value: U,
    tToV: (t: T) => V,
    uToV: (u: U) => V
  ): boolean {
    if (array && array.length > 0) {
      if (!array.find(v => tToV(v) === uToV(value))) {
        return false;
      }
    }
    return true;
  }

  static pluck<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const ret: any = {};
    for (const key of keys) {
      ret[key] = obj[key];
    }
    return ret;
  }

  static pluckTo<T, K>(from: T, to: K): K {
    const keys: (keyof T)[] = Object.keys(to).map(x => x as keyof T);
    const ret: any = {};
    for (const key of keys) {
      ret[key] = from[key];
    }
    return ret as K;
  }

  static toObject(val: any): any {
    if (val === null || val === undefined) {
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      );
    }
    return Object(val);
  }

  static isEmpty(obj): any {
    if (obj === null || obj === undefined) {
      return true;
    }
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  static objectAssign(target: any, ...source: any[]): any {
    let from: any;
    const to = ObjectHelper.toObject(target);
    let symbols: any;

    for (let s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      // tslint:disable-next-line: no-for-in
      for (const key in from) {
        if (Object.prototype.hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if ((Object as any).getOwnPropertySymbols) {
        symbols = (Object as any).getOwnPropertySymbols(from);
        for (const symbol of symbols) {
          if (Object.prototype.propertyIsEnumerable.call(from, symbol)) {
            to[symbol] = from[symbol];
          }
        }
      }
    }
    return to;
  }

  static sort<T>(
    direction = 'asc',
    propertyKey: string,
    array: T[],
    withIsoCodeHack = false
  ): T[] {
    return array.sort((a, b) => {
      const sortResult = ObjectHelper.sortHelper(
        propertyKey,
        a,
        b,
        withIsoCodeHack
      );
      return direction === 'desc' ? sortResult : -sortResult;
    });
  }

  static sortMultiple<T>(
    direction = 'asc',
    propertyKey: string[],
    array: T[],
    withIsoCodeHack = false
  ): T[] {
    if (!!array && array.length > 0) {
      const element = array[0];
      for (const property of propertyKey) {
        if (!!element[property]) {
          return ObjectHelper.sort(direction, property, array, withIsoCodeHack);
        }
      }
    }
    return array;
  }

  static sortHelper(
    propertyKey: string,
    a: any,
    b: any,
    withIsoCodeHack: boolean
  ): number {
    if (a[propertyKey] === b[propertyKey]) {
      return 0;
    }
    if (
      withIsoCodeHack &&
      propertyKey === 'isoCode' &&
      (a[propertyKey] === 'US' || b[propertyKey] === 'US')
    ) {
      if (a[propertyKey] === 'US') {
        return 1;
      }
      if (b[propertyKey] === 'US') {
        return -1;
      }
    }
    const aProperty = a[propertyKey];
    const bProperty = b[propertyKey];
    return ObjectHelper.compareValues(aProperty, bProperty);
  }

  static compareValues<T>(lhs: T, rhs: T): number {
    if (lhs === rhs) {
      return 0;
    }
    if (typeof lhs === 'string' && typeof rhs === 'string') {
      return rhs.localeCompare(lhs);
    }
    if (lhs < rhs) {
      return 1;
    }
    return -1;
  }
}
