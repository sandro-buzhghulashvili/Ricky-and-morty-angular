import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.css']
})
export class EpisodeInfoComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute, private http:HttpClient) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((x:any) => {
      const helper = JSON.parse(x["obj"])
      for(let i of helper) {
        this.http.get(i)
         .subscribe((res:any) => {
          this.characters.push(res)
         })
      }
    })
  }

  characters:any[] = []

}
