import { Component, OnInit } from '@angular/core';
import { MembresService } from '../membres.service';

@Component({
  selector: 'app-liste-membres',
  templateUrl: './liste-membres.component.html',
  styleUrls: ['./liste-membres.component.css']
})
export class ListeMembresComponent implements OnInit {
	private listeMembres: Object[];

	constructor(private membresService: MembresService) { }

	ngOnInit() {
	  	this.membresService.getMembres()
	  		.subscribe(res => {
	  			this.listeMembres = res;
	  			// console.log(res);
	  		});
	}
}
