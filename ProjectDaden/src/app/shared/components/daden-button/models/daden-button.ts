export interface DadenButton {
  variant: 'primary' | 'secondary' | 'tertiary' | 'text';
  size: 'big' | 'medium' | 'small';
  color: 'blue' | 'red' | 'yellow' | 'green';
  hoverColor: 'blue' | 'red' | 'yellow' | 'green';
  disabled?: boolean;
  active?: boolean;
  label?: string;
  icon?: string;
}
