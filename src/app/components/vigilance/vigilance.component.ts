import { Component, OnInit } from '@angular/core';

import { AbonnementHistoriqueService } from '../../services/abonnement-historique.service';
import {  UserService } from '../../services/user.service';
import Iuser from '../../models/users.models';
@Component({
  selector: 'app-vigilance',
  templateUrl: './vigilance.component.html',
  styleUrls: ['./vigilance.component.scss']
})
export class VigilanceComponent implements OnInit {

  
  entreprises!:  Iuser[];

  submitted:boolean= false;
  search:string = "";

  constructor(
    private entreprisesService: UserService ,
    
  ) { }

  ngOnInit(): void {
    console.log("Welcome vigilance")
  }

  
  onGetAllEntreprise(): void {
    this.entreprisesService.getAllUsers()
    .then(
      (data: any) => {
        this.entreprises = data;
      }
    )
  }

  onAddEntreprise():void{
    this.submitted = true;
  /*  if(this.formGroup.invalid){
      alert('Invalid Form');
      return;
    } 
    /*this.entreprisesService.addEntreprises_formation(this.formGroup.value)
    .subscribe(
      (data)=>{
        alert('Add Success');
      },(err)=> console.log('error',err)
    )*/
      
  }


  onSearch():void{

  }

  onDeleteEntreprise(item:Iuser):void{
   /* let conf = confirm('Etes vous sur?');
    if(conf){
      this.entreprisesService.deleteEntreprises_formation(item)
      .subscribe(
        (data)=>{
          this.onGetAllEntreprise();
        }
      )

    }*/
  }

  onUpdateEntreprise(item:Iuser):void{
   /* this.entreprisesService.updateEntreprises_formation(item)
    .subscribe(
      (data)=>{
        alert('Edit Success');
      },(err)=> console.log('error',err) 
    )*/

  }

}
