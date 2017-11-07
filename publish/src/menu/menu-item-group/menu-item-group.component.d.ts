import { OnInit } from '@angular/core';
import { MenuComponent } from "../menu.component";
export declare class MenuItemGroupComponent implements OnInit {
    parent: MenuComponent;
    label: string;
    inline: boolean;
    constructor(parent: MenuComponent);
    ngOnInit(): void;
    readonly drop_down: boolean;
}
