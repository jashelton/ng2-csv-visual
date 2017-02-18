import { Ng2CsvVisualPage } from './app.po';

describe('ng2-csv-visual App', function() {
  let page: Ng2CsvVisualPage;

  beforeEach(() => {
    page = new Ng2CsvVisualPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
