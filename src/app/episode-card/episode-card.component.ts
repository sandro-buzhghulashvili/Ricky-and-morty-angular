import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
    this.parsedCharacters = JSON.stringify(this.info.characters)
  }
  @Input()
  info:any = ""

  
  parsedCharacters:any = ""

}
