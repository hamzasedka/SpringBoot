import * as _ from 'underscore';

export class ArrayHelper {
  static difference<T>(array: _.List<T>, ...others: _.List<T>[]): T[] {
    return _.difference(array, ...others);
  }

  static range(start: number, stop: number, step?: number): number[] {
    return _.range(start, stop, step);
  }

  static contains<T>(list: _.List<T>, value: T, fromIndex?: number): boolean {
    return _.contains(list, value, fromIndex);
  }

  static intersection<T>(...arrays: _.List<T>[]): T[] {
    return _.intersection(...arrays);
  }

  static unique<T, U>(array: T[], selector?: (value: T) => U): T[] {
    return _.uniq(array, selector);
  }

  static chunk<T>(array: T[], count: number): _.Collection<T>[] {
    return _.chunk(array, count);
  }

  static getArray(list: string): string[] {
    if (!list) {
      return [];
    }
    // \s matches any whitespace character + ,; matches the characters + \t matches a tab character + \n matches a line-feed
    return list.split(/[\s,;\t\n]+/);
  }

  static getUniqueArray(list: string): string[] {
    if (!list) {
      return [];
    }
    return _.uniq(ArrayHelper.getArray(list)).filter(x => x);
  }

  static last<T>(array: T[]): T {
    return _.last(array);
  }

  static move<T>(arr: T[], oldIndex, newIndex): T[] {
    if (newIndex >= arr.length) {
      let k = newIndex - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr;
  }

  static groupBy<T>(list: T[], keyGetter: (T) => any): Map<any, T[]> {
    const map = new Map();
    list.forEach(item => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
}
