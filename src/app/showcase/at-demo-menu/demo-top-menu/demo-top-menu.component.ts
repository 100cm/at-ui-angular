import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-demo-top-menu',
             template: `
               <ul at-menu [atType]="'horizontal'" [theme]="'light'">

                 <li at-menu-item>
                   <div at-menu-link><i class="icon icon-home"></i>导航菜单1</div>
                 </li>
                 <li at-submenu>
                   <div title><i class="icon icon-home"></i>导航菜单2</div>
                   <ul at-menu-group [label]="'小分组'">
                     <li at-menu-item>
                       <div class="at-menu__item-link">
                         分组1
                       </div>
                     </li>
                     <li at-menu-item>
                       分组1
                     </li>
                   </ul>
                 </li>
                 <li at-submenu>
                   <div title><i class="icon icon-home"></i>导航菜单3导航菜单3导航菜单3</div>
                   <ul at-menu-group [label]="'小分组'">
                     <li at-menu-item>
                       分组1
                     </li>
                     <li at-menu-item>
                       分组1
                     </li>
                   </ul>

                   <ul>
                     <li at-menu-item>
                       分组1
                     </li>
                     <li at-menu-item>
                       分组1
                     </li>
                     <ul at-submenu>
                       <div title>导航菜单5</div>
                       <li at-menu-item>层级</li>
                       <li at-menu-item>层级</li>
                       <li at-menu-item>层级</li>
                       <ul at-submenu>
                         <div title>导航菜单6</div>
                         <li at-menu-item>层级</li>
                         <li at-menu-item>层级</li>
                         <li at-menu-item>层级</li>
                       </ul>
                     </ul>
                     <li at-menu-item>
                       分组1
                     </li>
                     <li at-menu-item>
                       分组1
                     </li>
                     <li at-menu-item>
                       分组1
                     </li>
                   </ul>

                 </li>

                 <li at-submenu>
                   <div title><i class="icon icon-home"></i>导航菜单4</div>
                   <ul>
                     <li at-menu-item>1</li>
                     <li at-menu-item>2</li>
                     <li at-menu-item>3</li>
                     <li at-menu-item>4</li>
                   </ul>
                   <div class="123">
                     adasdasdasdasd
                   </div>
                 </li>
               </ul>  `,
           })

export class DemoTopMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
