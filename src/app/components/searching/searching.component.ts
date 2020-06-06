import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styles: [
  ]
})
export class SearchingComponent implements OnInit {
  heroes:any[] =[];
  term:string;

  constructor(private activatedroute:ActivatedRoute,
      private _heroesService: HeroesService, 
      private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.params
    .subscribe(params =>{
      this.term = params['term']  
      this.heroes = this._heroesService.searchingHeroes(params['term'])
        console.log(this.heroes)
    })
  }
  seeHeroe(idx:Number){
    this.router.navigate(['/heroe', idx]);
  }

}
