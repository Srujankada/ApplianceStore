import { ApplianceStorePage } from './app.po';

describe('appliance-store App', function() {
  let page: ApplianceStorePage;

  beforeEach(() => {
    page = new ApplianceStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
