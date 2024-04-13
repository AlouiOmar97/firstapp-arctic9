import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {

  id!: number
  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    /*console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.snapshot.queryParams['name']);
    console.log(this.activatedRoute.snapshot.queryParams['age']);
    console.log(this.activatedRoute.snapshot.params['id']);*/
    
    this.id= this.activatedRoute.snapshot.params['id']
  }

  toHome(){
    this.router.navigateByUrl('/home')
  }

}
