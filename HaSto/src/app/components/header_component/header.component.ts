import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export class searchObj {
    factor: string;
    category: string;
};

@Component({
    selector: 'site-header',
    templateUrl: 'header.component.html',
    styleUrls: [ 'header.component.scss' ]
})

export class HeaderComponent {

    search: searchObj = {
        factor: "",
        category: "all"
    };

    /*@Input()
    type: String;

    constructor(type: String) {
        this.type = type;
    }*/

    constructor(private route: Router) { }

    searchFactor() {
        //console.log(this.search.factor, this.search.category);
        this.route.navigate(['/Search/' + this.search.category + "/" + this.search.factor]);
    }

    checkKeyUp(event) {
        if(event.keyCode === 13 && this.search.factor !== '')
            this.searchFactor();
    }

}