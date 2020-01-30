export interface NavItem {
  id:string;
  parentId?:string;
  displayName: string;
  disabled?: boolean;
  iconName: string;
  expanded: boolean;
  route?: string;
  children?: NavItem[];
  order:number;
}
