import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent implements OnInit {
 @Input() heroe:any ={}
 @Input() index:number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  seeHeroe(){
    this.router.navigate(['/heroe', this.index]);
  }
}
