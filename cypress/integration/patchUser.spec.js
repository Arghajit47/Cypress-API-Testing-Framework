/// <reference types = "Cypress" />

import { ApiFramework } from "../robots/BaseAPI_framework";
// import { properties } from "../_utils/properties/index";

const apiFramework = new ApiFramework();

describe("Patch API User Test", () => {
  it("should update users", () => {
    cy.fixture("example.json").then((user) => {
        const body = {
            name: `${user.firstName} ${user.middleName} ${user.lastName}`,
            email: `${user.firstName}${user.middleName}${user.lastName}@gmail.com`,
            gender: "male",
            status: "inactive",
        }
        cy.readFile("cypress/downloads/GetUserById.json").then((data) => {
            apiFramework.callPutOrPatchAPIWithAuth("PATCH", `${user.BaseUrl}/${data.id}`, user.accesstoken, body, "UpdateUserByPatch.json", 200);
            cy.readFile("cypress/downloads/UpdateUserByPatch.json").then((data) => {
                expect(data).has.property("status", "inactive");
            });  
        })
      })
  });

  it("should return newly created user with Id", () => {
    cy.readFile("cypress/downloads/UpdateUserByPatch.json").then((user) => {
        const Id = user.id;
        const name = user.name;
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