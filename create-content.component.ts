import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';  //BONUS

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  @Output() contentAdded: EventEmitter<any> = new EventEmitter<any>();

  newContent: any = {}; 
  //newContent: Content = {};     //BONUS
  errorMessage: string = '';
  constructor() { }

  createContent(): void {

   
    const requiredFields = Object.keys(this.newContent).filter(key => {
      return (typeof this.newContent[key] === 'string' || this.newContent[key] instanceof String) && !this.newContent[key];
    });

    if (requiredFields.length > 0) {
      
      this.errorMessage = 'Error: Please fill in all required fields (' + requiredFields.join(', ') + ')';
      console.error(this.errorMessage);
      return; 
    }
     
    setTimeout(() => {
      
      //if (this.newContent.id && this.newContent.title) {
        
        this.contentAdded.emit(this.newContent);
        
        
        this.newContent = {};

        this.errorMessage = '';

        
        console.log("Content addition successful:", this.newContent.title);  //BONUS
      
    }, 500); 
  }
}

