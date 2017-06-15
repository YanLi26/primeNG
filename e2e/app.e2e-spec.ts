import { PrimeNGPage } from './app.po';

describe('prime-ng App', () => {
  let page: PrimeNGPage;

  beforeEach(() => {
    page = new PrimeNGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
