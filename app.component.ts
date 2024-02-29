import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from './helper-files/content-interface';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypeFilterPipePipe } from "./content-type-filter-pipe.pipe";
//import { ClickMeComponent } from "./content-list/click-me-component";
//import { SearchComponent } from "./search/search.component";
import { ContentCardComponent } from "./content-card/content-card.component";
import { filter } from 'rxjs';
import { CreateContentComponent } from './create-content/create-content.component'; // Assignment#5

@Component({
    selector: 'app-root',
    standalone: true,
    //Assignment#5
    imports: [CreateContentComponent, CommonModule, ContentListComponent, RouterOutlet, ContentTypeFilterPipePipe, ContentCardComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    
})

export class AppComponent {
//[x: string]: any;
  title = 'L_Castaneda_MyFavouriteFood_ChileenNogada';
  id =1;
  description = 'Created with poblano chili, ground beef and pork and spices';
  taste = 'Spicy';
  type = 'Spicy';
  imgURL ='https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/red-meats-&-red-meat-dishes/chile-en-nogada/main-header.jpg';
onClickMe: any;

}

