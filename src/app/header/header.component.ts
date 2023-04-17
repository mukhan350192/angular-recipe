import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent{
  @Output() feautureSelected = new EventEmitter<string>();
  onSelect(feauture: string){
    this.feautureSelected.emit(feauture);
  }
}
