export interface AtTreeOption {
  isLeaf?: boolean;
  title?: string;
  key?: any
  children?: Array<AtTreeOption>
  checked?: boolean
  selected?: boolean
  remote?: boolean
  disabled?:boolean
  status?: 'half_selected' | 'checked' | 'un_checked'
}
