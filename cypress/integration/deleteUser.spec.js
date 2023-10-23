/// <reference types = "Cypress" />

import { ApiFramework } from "../robots/BaseAPI_framework";
// import { properties } from "../_utils/properties/index";

const apiFramework = new ApiFramework();

describe("Delete API User Test", () => {
  it("should delete user", () => {
    cy.readFile("cypress/downloads/CreateUser.json").then((user) => {
      const Id = user.id;
      const name = user.name;
      cy.fixture("example.json").then((user) => {
        apiFramework.callGetAPIWithAuth(
          "DELETE",
          `${user.BaseUrl}/${Id}`,
          user.accesstoken,
          "DeleteUser.json",
          204
        );
      });
    });
  });
});
