import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConseilService } from '../../services/conseil.service';
import  Iconseil  from '../../models/conseils.models';

@Component({
  selector: 'app-detailconseil',
  templateUrl: './detailconseil.component.html',
  styleUrls: ['./detailconseil.component.scss']
})
export class DetailconseilComponent implements OnInit {

  arrayConseil:Iconseil[] = [];
  conseilElement: Iconseil  ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conseil: ConseilService
  ) { }

    ngOnInit() {
    
      this.conseil.getAllConseils().then((data:any)=>{
      this.arrayConseil = data;
      console.table(this.arrayConseil);

      const conseilId: string | null = this.route.snapshot.paramMap.get('id');
      if(conseilId ) {
      this.conseilElement = this.arrayConseil[+conseilId];
    }
    });
    //recuperation de id du conseil sur le quelle router
    
  }

}
