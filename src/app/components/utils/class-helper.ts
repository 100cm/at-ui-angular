export interface ClassHelper {
  _prefixCls: string
  _classList: Array<any>
  _el: HTMLElement;
  nativeElement: any
  _setClassMap(): void
}

export function isNotNil(value: any): boolean {
  return (typeof(value) !== 'undefined') && value !== null;
}
