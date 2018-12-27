import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs';

@Injectable()
export class AtSelectControlService {

  constructor() {
  }

  $openStatus = new Subject<boolean>()
}
