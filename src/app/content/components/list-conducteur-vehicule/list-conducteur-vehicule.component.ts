import { Component, OnInit } from '@angular/core';
import { Conducteur } from 'src/app/conducteur';
import { ConducteurService } from 'src/app/services/conducteur.service';

@Component({
  selector: '.app-list-conducteur-vehicule',
  templateUrl: './list-conducteur-vehicule.component.html',
  styleUrls: ['./list-conducteur-vehicule.component.css']
})
export class ListConducteurVehiculeComponent implements OnInit {

  conducteurs!: Conducteur[];

  constructor(private condService: ConducteurService) { }

  ngOnInit(): void {

    this.condService.listConducteur().subscribe(
      data => {
        console.log(data);
        this.conducteurs = data;
      }
    )
  }

}
