import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  PRIMARY_OUTLET,
  ActivationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterData } from '../interfaces/router-data.interface';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: RouterData[];
  isPageNotFound: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (val instanceof ActivationEnd) {
        val.snapshot.component?.name === 'PageNotFoundComponent'
          ? (this.isPageNotFound = true)
          : (this.isPageNotFound = false);
      }
    });
  }

  ngOnInit() {
    let breadcrumb: RouterData = {
      label: 'Courses',
      url: '',
    };

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        let root: ActivatedRoute = this.route.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
      });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: RouterData[] = []
  ): RouterData[] {
    const ROUTE_DATA_BREADCRUMB = 'title';

    let children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }
    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length == 0) {
        continue;
      }
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      url += `/${routeURL}`;
      let breadcrumb: RouterData = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: url,
      };
      breadcrumbs.push(breadcrumb);
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
