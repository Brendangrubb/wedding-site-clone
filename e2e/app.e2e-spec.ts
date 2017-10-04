import { SabWeddingSitePage } from './app.po';

describe('wedding-site-clone App', () => {
  let page: SabWeddingSitePage;

  beforeEach(() => {
    page = new SabWeddingSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
