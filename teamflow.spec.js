// teamflow.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Teamflow Take-Home Project', function() {
    it('Visits Giphy', function() {
		//Enters Giphy page
		cy.visit("http://giphy.com");

		//Clicks Trending section
		cy.get('#react-target > div > div.homepage__Container-iz3zf-0.fKRVVj > div:nth-child(2) > div.Container-sc-swtq0n.fXGnTM > h3').click();

		//Validating Header text
		cy.get('#react-target > div > div.Header-sc-11zzo6v.gfefUQ > h4').should('have.text', 'Trending GIFs');

		//Navigate back to main page
		cy.go('back');

		const search = 'Happy Birthday';
		//Validate search field exists
		cy.get('#searchbar > div > div > form > input').should('exist');

		//Validate you can type text into search field
		cy.get('#searchbar > div > div > form > input').type(search, { force: true }).should('have.value', search).type('{enter}');

		//Validate results are displayed after a search
		cy.get('#react-target > div > div:nth-child(5) > div._2SJKKTR1aMK3kUasjbiVwE > div.Container-sc-ju2d4r.iUVSlU > h1').contains(search);

		//Navigate back to main page
		cy.go('back');

		//Click on GIF in Trending section
		cy.get('#react-target > div > div.homepage__Container-iz3zf-0.fKRVVj > div:nth-child(2) > div.fade-next-previous__Container-sc-1okudgt-0.lsOAZ > div.ListWrapper-sc-1mxkd1t.djoQGB > ul > li:nth-child(1) > div > div > div').click();

		//Validates navigation to page and GIF selected is displayed by checking title of GIF
		cy.get('#react-target > div > div:nth-child(5) > div > div._3lHuNOPnvckvR4CcUUV0gB > div.Container-sc-12lgmgn.fIFNuA > div.ContentWrapper-sc-14xwjff.hfnmXe > div > div > div._2z5ML4ex6UJmUfY7XtFQ__ > div > h1').contains('Houston Astros Sport');

})
})


