import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {ActivatedRoute, Router} from '@angular/router';
import {inject} from 'vitest';

@Component({
  imports: [
    MatButton
  ],
  selector: 'app-page-not-found',
  styleUrl: './page-not-found.css',
  templateUrl: './page-not-found.html',
})
export class PageNotFound implements OnInit {

  protected invalidPath  = '';

  // @ts-ignore
  private route: ActivatedRoute   = inject(ActivatedRoute);

  // @ts-ignore
  private router: Router          = inject(Router);

  ngOnInit() {
    this.invalidPath = this.route.snapshot.url.map(url => url.path).join('/');
  }

  protected navigateToHome() {
    this.router.navigate(['home']).then();
  }

}
