import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  name:string = ""
  gender:string = "all"
  
  @Output()

  filterEventEmitter:EventEmitter<any> = new EventEmitter()

  filterByName() {
    this.filterEventEmitter.emit({name :this.name,gender:this.gender})
  }
  filterByGender() {
    this.filterEventEmitter.emit({name :this.name,gender:this.gender})
  }
}
