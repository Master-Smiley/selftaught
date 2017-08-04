import { SelfTaughtMeanPage } from './app.po';

describe('self-taught-mean App', () => {
  let page: SelfTaughtMeanPage;

  beforeEach(() => {
    page = new SelfTaughtMeanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
