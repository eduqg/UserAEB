import { Aeb3Page } from './app.po';

describe('aeb3 App', () => {
  let page: Aeb3Page;

  beforeEach(() => {
    page = new Aeb3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
