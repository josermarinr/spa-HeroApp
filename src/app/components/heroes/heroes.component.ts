import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] =[];
  constructor( private _heroes:HeroesService,
    private router: Router ) { }

  ngOnInit(): void {

    this.heroes = this._heroes.getHeroes();

  }
  seeHeroe(idx:Number){
    this.router.navigate(['/heroe', idx]);
  }
}
