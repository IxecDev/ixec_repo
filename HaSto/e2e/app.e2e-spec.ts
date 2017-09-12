import { HaStoPage } from './app.po';

describe('ha-sto App', () => {
  let page: HaStoPage;

  beforeEach(() => {
    page = new HaStoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
