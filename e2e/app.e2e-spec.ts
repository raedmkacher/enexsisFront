import { EnexisFrontPage } from './app.po';

describe('enexis-front App', function() {
  let page: EnexisFrontPage;

  beforeEach(() => {
    page = new EnexisFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
