import { Component } from '@angular/core';

import { DuckMedia } from '../services/duckmedia.service';

import { ArticleEntity } from '../entities/article.entity';

@Component({
  selector: 'site-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  
  private articleList: Array<ArticleEntity>;
  private principalList: Array<ArticleEntity>;

  constructor(duckmedia: DuckMedia) {
    duckmedia.getInformation().subscribe(data => {
      this.articleList = data['contents'];
      this.principalList = data['contentsPrincipal'];
    });
  }

}