import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bixe-commingled-scope-container',
  templateUrl: './commingled-scope.container.html',
  styleUrls: ['./commingled-scope.container.scss'],
})
export class CommingledScopeContainer {
  public globalStore = this.route.snapshot.data['commingled']['global'];
  public isolatedStore = this.route.snapshot.data['commingled']['isolated'];
  constructor(private route: ActivatedRoute) { }
}
