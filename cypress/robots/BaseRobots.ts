export abstract class BaseEyes {
  seesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should("have.text", text);
    return this;
  }

  doesNotseesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should("not.have.text", text);
    return this;
  }

  seesIdVisible(id: string) {
    cy.get(`#${id}`).should("be.visible");
    return this;
  }

  doesNotseesIdVisible(id: string) {
    cy.get(`#${id}`).should("not.be.visible");
    return this;
  }

  seesTextWithClass(domClass: string, text: string) {
    cy.get(`.${domClass}`).should("have.text", text);
    return this;
  }

  seesDomVisibleWithCustomMatcher(domlabel: string, matcher: string) {
    cy.get(`[${domlabel}=${matcher}]`).should("be.visible");
    return this;
  }

  seesDomVisible(domlabel: string) {
    cy.get(domlabel).should("be.visible");
    return this;
  }

  seesDomContainTextVisible(dom: string, text: string) {
    cy.get(dom).should("eq", text).should("be.visible");
    return this;
  }

  seesTextInChildDom(parentDom: string, childDom: string, text: string) {
    cy.get(`${parentDom} ${childDom}`).should("contain", text);
    return this;
  }

  seesDomTextWithIndex(dom: string, index: number, text: string) {
    cy.get(dom).eq(index).should("have.text", text);
    return this;
  }

  seesDomWithIndex(dom: string, index: number) {
    cy.get(dom).eq(index).should("be.visible");
    return this;
  }

  hasLengthForDomWithClass(domClass: string, length: number) {
    cy.get(`.${domClass}`).should("have.length", length);
    return this;
  }

  hasLengthForDom(parentDomClass: string, childDom: string, length: number) {
    cy.get(parentDomClass).find(childDom).should("have.length", length);
    return this;
  }

  seesDomContainText(dom: string, text: string) {
    cy.get(dom).should("contain", text);
    return this;
  }

  seesDomContainTextValue(dom: string, value: string) {
    cy.get(dom).contains(value);
    return this;
  }
  seesDomShouldContainText(dom: string, text: string) {
    cy.get(dom).should("contain.text", text);
  }

  seesDomContainTextWithIndex(dom: string, index: number, text: string) {
    cy.get(dom).eq(index).should("contain", text);
    return this;
  }

  doesNotseesDom(dom: string) {
    cy.get(dom).should("not.be.visible");
    return this;
  }

  seesTextInAgGridCell(rowId: string, colId: string, text: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .should("have.text", text);
    return this;
  }

  seesAgGridColumnSelected(rowId: string, colId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .should("have.class", "ag-cell-range-selected");
    return this;
  }

  seesAgGridRowSelected(rowIndexId: string) {
    cy.get(`[aria-rowindex=${rowIndexId}]`).should(
      "have.class",
      "ag-row-selected"
    );
    return this;
  }

  seesMinimumNumberOfElementsInDom(
    dom: string,
    childDomClass: string,
    minimumLength: number
  ) {
    cy.get(dom)
      .find(`.${childDomClass}`)
      .should("have.length.greaterThan", minimumLength);
    return this;
  }

  seesNumberOfElementsInDom(
    dom: string,
    childDomClass: string,
    length: number
  ) {
    cy.get(dom).find(`.${childDomClass}`).should("have.length", length);
    return this;
  }

  seesPathNameInUrl(path: string) {
    cy.location("pathname").should("eq", path);
    return this;
  }

  seesDomDisabled(dom: string) {
    cy.get(dom).should("be.disabled");
    return this;
  }

  seesDomContainTextDisabled(dom: string, text: string) {
    cy.get(dom).should("contain", text).should("be.disabled");
    return this;
  }

  seesDomContainTextEnabled(dom: string, text: string) {
    cy.get(dom).should("contain", text).should("not.be.disabled");
    return this;
  }

  seesDomEnabled(dom: string) {
    cy.get(dom).should("not.be.disabled");
    return this;
  }

  seesWebTitle(text: string) {
    cy.title().should("eq", text);
  }

  seesDomElementWithXpath(dom: string) {
    cy.xpath(dom).should("be.visible");
    return this;
  }
}

export class BaseHands {
  clickOnId(id: string) {
    cy.get(`#${id}`).click();
    return this;
  }

  doubleClickOnId(id: string) {
    cy.get(`#${id}`).dblclick();
    return this;
  }

  clickOnDomElement(dom: string) {
    cy.get(dom).click({ force: true });
    return this;
  }
  doubleClickOnDomElement(dom: string) {
    cy.get(dom).dblclick({ force: true });
    return this;
  }

  clickOnDomElementWithXpath(dom: string) {
    cy.xpath(dom).click();
    return this;
  }

  clickOnDomContainText(dom: string, text: string) {
    cy.get(dom).should("contain", text).click();
    return this;
  }

  clickOnDomElementWithIndex(dom: string, index: number) {
    cy.get(dom).eq(index).click({ force: true });
    return this;
  }

  typeTextonDom(dom: string, text: string) {
    cy.get(dom).type(text, { force: true });
    return this;
  }

  typeTextonId(id: string, text: string) {
    cy.get(`#${id}`).type(text, { force: true });
    return this;
  }

  clickOnChildDom(parentId: string, dom: string, index: number) {
    cy.get(`#${parentId} ${dom}`).eq(index).click();
    return this;
  }

  ClickOnTextWithClassAndIndex(domClass: string, index: number) {
    cy.get(`[class=${domClass}]`).eq(index).click();
    return this;
  }

  scrollToWithClassName(domClass: string, direction: PositionType) {
    cy.get(`.${domClass}`).scrollTo(direction);
    return this;
  }

  clearDomElement(dom: string) {
    cy.get(dom).clear({ force: true });
    return this;
  }

  wait(milliSecs: number) {
    cy.wait(milliSecs);
    return this;
  }
  clickOnDomContainTextWithIndex(dom: string, index: number, text: string) {
    cy.get(dom).eq(index).should("contain", text).click();
    return this;
  }
}

export class BaseDependencies {
  visitUrl(url: string) {
    cy.visit(`${url}`, { timeout: 120000 });
    return this;
  }

  login() {
    cy.get("#email").type(Cypress.env("USER_NAME"));
    cy.get("#password").type(Cypress.env("PASSWORD"));
    cy.get("#login_submit").click();
    return this;
  }
}

type PositionType =
  | "topLeft"
  | "top"
  | "topRight"
  | "left"
  | "center"
  | "right"
  | "bottomLeft"
  | "bottom"
  | "bottomRight";

export function clickIfExist(element: any) {
  cy.get("body").then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).click();
    }
  });
}