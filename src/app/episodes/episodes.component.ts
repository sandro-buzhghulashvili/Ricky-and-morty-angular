import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit{
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/episode")
     .subscribe((res:any) => {
      this.allEpisodes = res.results
     })
  }

  allEpisodes:any[] = []

  x() {
    console.log(this.allEpisodes)
  }
}
