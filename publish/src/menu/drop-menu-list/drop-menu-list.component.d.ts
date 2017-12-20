import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MenuListComponent } from "../menu-list/menu-list.component";
export declare class DropMenuListComponent extends MenuListComponent implements OnInit {
    private el;
    private render;
    ngOnInit(): void;
    constructor(el: ElementRef, render: Renderer2);
}
