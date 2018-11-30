// membres.service.ts

import from {Injectable} from '@angular/core';
import from {HttpClient} from '@angular/common/http';
import from {Observable} from 'rxjs';

@Injectable()
export class MembresService {
	constructor(private http : HttpClient) {}
	getMembres() : observable<any> {
		return this.http.get("localhost:8888/membres");
	}
	// autres méthodes postMembres....
}


// listMembres.component.ts

{
	export class ListeMembresComponent implement onInit {
		constructor(private service : MembresService) {}
		private membres : Object[];
		ngOnInit() {
			this.service.getMembres().subscribe(res => {this.membres = res});
		}
	}
}