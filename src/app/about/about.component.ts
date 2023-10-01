import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(private http:HttpClient, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((x:Params) => {
      this.name = x["name"]
      this.status = x["status"]
    })
    this.http.get(`https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.status}`)
     .subscribe((res:any) => {
      console.log(res.results)
      this.alterData = res.results
      if(res.results.length >= 3) {
        while(this.sliderArr.length < 3) {
          const rand = Math.floor(Math.random() * res.results.length)
          let valid = true
          for(let i of this.sliderArr) {
            if(i.id === res.results[rand].id) {
              valid = false
            }
          }
          if(valid) {
            this.sliderArr.push(res.results[rand])
          }
        }
      }
     })
  }

  name:string = ""
  status:string= ""
  sliderArr:any[] = []
  alterData:any[] = []
}
