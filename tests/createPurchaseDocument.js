module.exports = {
  PURCHASE_DOCUMENT_ID: 0,

  before: function(browser) {
    console.log('Setting up...');
  },

  after: function(browser) {
    console.log('Closing down...');
  },

  'Create Purchase Document': function(browser) {
    browser
      .url("<URL_TO_APP")
      .waitForElementPresent("input[id*=purchaseDocumentSmartField]", 6000)
      .setValue("input[id*=purchaseDocumentSmartField]", this.PURCHASE_DOCUMENT_ID)
      .setValue("input[id*=descriptionSmartField]", "Nightwatch.js test doc")
      .click("button[id*=savePurchaseDocumentButton]")
      .useXpath() // switch to xpath for selecting nodes
      .waitForElementPresent("//div[@class='sapMObjectIdentifierTitle']/" +
        "a[text()='Nightwatch.js test doc']", 6000)
      .pause(3000)
      .end();
  },
};
