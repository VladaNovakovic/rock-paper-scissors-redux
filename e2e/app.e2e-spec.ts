import { RockPapperScissorsReduxPage } from './app.po';

describe('rock-papper-scissors-redux App', () => {
  let page: RockPapperScissorsReduxPage;

  beforeEach(() => {
    page = new RockPapperScissorsReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
