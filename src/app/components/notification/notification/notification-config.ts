export type NotificationConfigType = 'success' | 'info' | 'error' | 'warning'

export class NotificationConfig {
  index: any
  title: string
  duration: number
  icon: string
  message: string
  showClose: boolean
  state: 'enter' | 'leave'
  type: NotificationConfigType

  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  constructor(options, type?: NotificationConfigType,) {
    this.index = this.guid()
    this.title = options.title || '';
    this.state = 'enter'
    this.duration = options.duration == 0 ? 0 : (options.duration || 4000);
    this.message = options.message || ''
    this.icon = options.icon || '';
    this.showClose = options.showClose || true;
    this.type = type || options.type || 'info';
  }
}
