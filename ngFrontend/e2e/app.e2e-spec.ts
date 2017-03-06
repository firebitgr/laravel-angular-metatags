import { NgFrontendPage } from './app.po';

describe('ng-frontend App', () => {
  let page: NgFrontendPage;

  beforeEach(() => {
    page = new NgFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
