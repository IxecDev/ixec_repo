import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeaderComponent } from '../header_component/header.component';
import { SlimFooterComponent } from '../slim-footer_component/slim-footer.component';

import { EnvVariables } from '../../classes/env_variables';

@Component({
    selector: 'site-product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: [ 'product-detail.component.css' ]
})

export class ProductDetailComponent implements OnInit {

    private _E_ = new EnvVariables();

    private sub: any;
    private productId: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.productId = params['id'];
        });
    }

}