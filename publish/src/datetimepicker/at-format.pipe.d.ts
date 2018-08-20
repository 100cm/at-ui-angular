import { PipeTransform } from '@angular/core';
export declare class AtFormatPipe implements PipeTransform {
    transform(value: Date, formatString: string): string;
}
