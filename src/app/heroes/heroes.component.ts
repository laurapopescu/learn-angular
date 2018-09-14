import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  hero: Hero = { 
    id: 1, 
    name: "laura"
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() { 
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}