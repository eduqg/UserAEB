import { Aeb1Page } from './app.po';

describe('aeb1 App', () => {
  let page: Aeb1Page;

  beforeEach(() => {
    page = new Aeb1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
