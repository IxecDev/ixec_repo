import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeaderComponent } from '../header_component/header.component';
import { SlimFooterComponent } from '../slim-footer_component/slim-footer.component';

import { EnvVariables } from '../../classes/env_variables';

@Component({
    selector: 'site-search',
    templateUrl: 'search.component.html',
    styleUrls: [ 'search.component.scss' ]
})

export class SearchComponent implements OnInit {

    private _E_ = new EnvVariables();
    private sub: any;

    private category?: string;
    private query?: string;

    constructor(private route: ActivatedRoute) {
        console.log(this._E_.BASE_URL);
    }

    ngOnInit() {
        // GETTING URL PARAMETERS
        this.sub = this.route.params.subscribe(params => {
            this.category = params['category'];
            this.query = params['query'];

            this.init(this.category, this.query);
        });
    }

    init(category?: string, query?: string): void {
        if (category !== void 0 && query !== void 0) {
            console.log("Search by category and query");
        } else {
            console.log("Search by query");
        }
    }

}