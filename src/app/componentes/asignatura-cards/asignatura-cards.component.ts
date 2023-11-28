import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignatura-cards',
  templateUrl: './asignatura-cards.component.html',
  styleUrls: ['./asignatura-cards.component.scss'],
})
export class AsignaturaCardsComponent  implements OnInit {

  isHovered: boolean = false;
  
  constructor() { }
    onMouseEnter() {
      this.isHovered = true;
    }
    onMouseLeave() {
      this.isHovered = false;
    }
  ngOnInit() {}

}
