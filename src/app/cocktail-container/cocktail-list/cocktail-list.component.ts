import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails?: Cocktail[];
  @Input() selectedCocktail!: Cocktail;

  @Output() private changeCocktail: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}
  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}