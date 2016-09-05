describe('Promise', () => {

  beforeEach( () => {
    browser.get('/promise');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-promise h2')).getText()).toEqual('Features');
  });

});
