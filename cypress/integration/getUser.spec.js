/// <reference types = "Cypress" />

import { ApiFramework } from "../robots/BaseAPI_framework";
// import { properties } from "../_utils/properties/index";

const apiFramework = new ApiFramework();


describe("Get API User Test", () => {
  it("should return all users", () => {
    cy.fixture("example.json").then((user) => {
      cy.log(user.BaseUrl);
      cy.log(user.accesstoken);
      apiFramework.callGetAPIWithAuth("GET", user.BaseUrl, user.accesstoken,"GetUser.json", 200);
    })
  });

  it("should return user with Id", () => {
    cy.readFile("cypress/downloads/GetUser.json").then((user) => {
      const Id = user[0].id;
      const name = user[0].name;
      cy.fixture("example.json").then((user) => {
        apiFramework.callGetAPIWithAuth("GET", `${user.BaseUrl}/${Id}`, user.accesstoken,"GetUserById.json", 200);
      })
      cy.readFile("cypress/downloads/GetUserById.json").then((data) => {
        expect(data.name).to.eq(name);
        expect(data.id).to.eq(Id);
      })
    });
  });
});