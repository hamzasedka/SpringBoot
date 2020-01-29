export interface EnumItem {
  id: number | string;
  name: string;
}
export class EnumHelper {
  static EnumToList(o: {}): EnumItem[] {
    return Object.keys(o)
      .filter(a => a.match(/^\D/))
      .map(name => {
        const label = name.replace(/_+/g, ' ');
        return { name: label, id: o[name] as number };
      });
  }

  static EnumToEnumList<T>(o: {}): T[] {
    return EnumHelper.EnumToList(o).map(x => (x.id as unknown) as T);
  }
}
