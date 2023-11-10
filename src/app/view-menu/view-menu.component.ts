import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.scss']
})
export class ViewMenuComponent {
  constructor(private route: ActivatedRoute){}
  rId:any;

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      this.rId = params.get('rId');
    });
  }

  

}
