import { Component, OnInit } from '@angular/core';
import { TimelineLite, TweenLite } from "gsap";

import { HeaderComponent } from '../header_component/header.component';
import { FooterComponent } from '../footer_component/footer.component';

export class CarouselEntity {
    image: string;
    title: string;
    description: string;
    comments: string;
}

const CarouselItems: CarouselEntity[] = [
    { image: "assets/images/misc/hammer1.png", title: "¡Gran Oferta!", description: "Departamento de Ferretería al 2x1", comments: "Promoción válida hasta el 18 de enero del 2015 (1)" },
    { image: "assets/images/misc/hammer1.png", title: "¡Gran Oferta!", description: "Departamento de Ferretería al 2x1", comments: "Promoción válida hasta el 18 de enero del 2015 (2)" },
    { image: "assets/images/misc/hammer1.png", title: "¡Gran Oferta!", description: "Departamento de Ferretería al 2x1", comments: "Promoción válida hasta el 18 de enero del 2015 (3)" },
    { image: "assets/images/misc/hammer1.png", title: "¡Gran Oferta!", description: "Departamento de Ferretería al 2x1", comments: "Promoción válida hasta el 18 de enero del 2015 (4)" },
    { image: "assets/images/misc/hammer1.png", title: "¡Gran Oferta!", description: "Departamento de Ferretería al 2x1", comments: "Promoción válida hasta el 18 de enero del 2015 (5)" }
]

@Component({
    selector: 'app-root',
    templateUrl: 'main.component.html',
    styleUrls: [ 'main.component.scss' ]
})

export class MainComponent implements OnInit {

    currentCarousel: CarouselEntity = CarouselItems[0];
    carouselItems: CarouselEntity[] = CarouselItems;
    carouselDirection: boolean = true;
    carouselTime: number = 8000;

    private carouselItem;
    private carouselItemContainer;
    private carouselInfo;
    private carouselButton;
    private timeline;

    currentST;

    switchCarouselClick(index?: number): void {
        clearTimeout(this.currentST);
        this.switchCarousel(index);
    }

    switchCarousel(index?: number): void {

        let currentIndex = index;
        let self = this;
        let pixels = window.innerWidth > 1920 ? 500 : 300;
        let top = index * pixels * -1;

        let i = 0;
        let ilen = 0;


        this.timeline.clear();
        this.timeline.add( TweenLite.to(this.carouselInfo[currentIndex], 0.2, { top: "300px", left: "-180px" }) );
        this.timeline.add( TweenLite.to(this.carouselItemContainer, 0.5, { top: top + "px" }) );
        this.timeline.add( TweenLite.to(this.carouselInfo[currentIndex], 1, { top: "-50px", left: "-180px" }) );
        this.timeline.call(function() {
            for(i = 0, ilen = this.carouselButton.length; i < ilen; i++) this.carouselButton[i].className = "carousel-button";
            this.carouselButton[currentIndex].className = "carousel-button active";
        }, null, this, 1);
        this.timeline.restart();


        this.currentST = setTimeout(function() {
            if(currentIndex === 4) self.carouselDirection = false;
            else if(currentIndex === 0) self.carouselDirection = true;

            if(self.carouselDirection) self.switchCarousel(currentIndex + 1);
            else self.switchCarousel(currentIndex - 1);
        }, this.carouselTime);

    }

    ngOnInit(): void {
        this.carouselItem = document.getElementsByClassName("carousel-item");
        this.carouselItemContainer = document.getElementById("carousel-item-container");
        this.carouselInfo = document.getElementsByClassName("carousel-info");
        this.carouselButton = document.getElementsByClassName("carousel-button");
        this.timeline = new TimelineLite();
        var self = this;

        this.currentST = setTimeout(function() {
            self.switchCarousel(1);
        }, this.carouselTime);
    }

}