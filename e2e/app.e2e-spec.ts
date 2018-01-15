import { AngularAppAgainPage } from './app.po';

describe('angular-app-again App', function() {
  let page: AngularAppAgainPage;

  beforeEach(() => {
    page = new AngularAppAgainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
