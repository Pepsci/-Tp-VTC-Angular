import { Component, OnInit } from '@angular/core';
import { Conducteur } from 'src/app/conducteur';
import { ConducteurService } from 'src/app/services/conducteur.service';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { Vehicule } from 'src/app/vehicule';

@Component({
  selector: '.app-list-conducteur-vehicule',
  templateUrl: './list-conducteur-vehicule.component.html',
  styleUrls: ['./list-conducteur-vehicule.component.css']
})
export class ListConducteurVehiculeComponent implements OnInit {

  conducteurs!: Conducteur[];
  vehicules!: Vehicule[];

  constructor(private condService: ConducteurService, private vehiService: VehiculeService) { }

  ngOnInit(): void {

    this.condService.listConducteur().subscribe(
      data => {
        this.conducteurs = data;
      }
    );
    
    this.vehiService.listVehicule().subscribe(
      data => {
        this.vehicules = data;
      }
    );


  }

}
