import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Appartement } from '../core/models/appartement';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css'],
  providers:[]
})
export class AddAppartementComponent implements OnInit {
  residence!: Residence
  appartement: Appartement={
    id: 0, 
    numAppart: 0, 
    numEtage: 0, 
    surface: 0, 
    terrasse: "", 
    surfaceTerrasse: 0, 
    category: "", 
    description: "", 
    residence: this.residence, 
    status: true
  }
  addAppartementForm!: FormGroup

  constructor(private router: Router, private logService: LogService) { }

  ngOnInit(): void {
    this.addAppartementForm= new FormGroup({
      category: new FormControl(this.appartement.category,[Validators.required, Validators.minLength(3),Validators.pattern('^[a-z]+')]),
      surface: new FormControl(this.appartement.surface,Validators.required)
    })
  }

  get category(){return this.addAppartementForm.get('category')}
  get surface(){return this.addAppartementForm.get('surface')}

  addAppartement(){
    console.log("add Appartement");
   // console.log(this.addAppartementForm.value);
   // console.log(this.addAppartementForm.value.surface);
   this.logService.log(this.addAppartementForm.value)
   this.logService.warn(this.addAppartementForm.value)
   this.logService.error(this.addAppartementForm.value)
   //this.router.navigateByUrl('/appartement')
    
  }
}
