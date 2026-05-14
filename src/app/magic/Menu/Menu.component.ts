import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  isOpen?: boolean;
  name?: string;
  url?: string;
  icon?: string;
  children?: MenuItem[];
}


@Component({
  selector: 'Menu',
  standalone: false,
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css'],
})
export class MenuComponent {
  tempUrl = '';
  constructor(public route: Router) {

  }
  _source!: MenuItem[];

  @Input() set source(val: string | MenuItem[]) {
    if (val && typeof val === 'string') {
      this._source = JSON.parse(val);
    } else {
      this._source = val as MenuItem[];
    }
  }

  liToggle(item: any, e: MouseEvent) {
    item.isOpen = !item.isOpen;
    e.stopPropagation();
  }
  aClick(e: MouseEvent) {

    e.stopPropagation();

    console.log(e);
    // e.path[1].classList.add('myRed');

  }
}
