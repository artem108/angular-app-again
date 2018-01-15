import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListPageService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private listPageService:ListPageService) {
    this.listPageService.getListAny().subscribe(data => {
      console.log(data)
    })
  }
}
