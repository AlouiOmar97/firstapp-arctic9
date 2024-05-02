import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppartementService } from '../services/appartement.service';
import { Appartement } from '../core/models/appartement';

@Component({
  selector: 'app-appartement-details',
  templateUrl: './appartement-details.component.html',
  styleUrls: ['./appartement-details.component.css']
})
export class AppartementDetailsComponent implements OnInit {
  id!: number
  appartement!: Appartement
  constructor(private activatedRoute: ActivatedRoute, private appartementService: AppartementService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id']
    this.appartementService.getAppartementById(this.id).subscribe((data)=>{
      this.appartement= data
    })
  }

}
