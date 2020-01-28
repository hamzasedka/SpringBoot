export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  expanded: boolean;
  route?: string;
  children?: NavItem[];
}
