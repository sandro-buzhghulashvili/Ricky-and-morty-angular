import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character")
     .subscribe((res:any) => {
      this.characterData = res.results
      this.mainCharacterData = res.results
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
     })
  }

  sliderArr:any[] = []
  mainCharacterData:any[] = []
  characterData:any[] = []

  filterSubscriber(res:any) {
    console.log(res)
    // console.log("In home",res)
    console.log(this.mainCharacterData)
    this.characterData = this.mainCharacterData.filter(element => element.name.includes(res.name))
    if(res.gender !== "all") {
      this.characterData = this.mainCharacterData.filter(element => element.name.includes(res.name) && element.gender.toLowerCase() === res.gender)
    }
  }
  
}
