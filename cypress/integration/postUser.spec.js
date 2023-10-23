/// <reference types = "Cypress" />

import { ApiFramework } from "../robots/BaseAPI_framework";
// import { properties } from "../_utils/properties/index";

const apiFramework = new ApiFramework();

describe("Post API User Test", () => {
  it("should create users", () => {
    cy.fixture("example.json").then((user) => {
        const body = {
            name: `${user.firstName} ${user.lastName}`,
            email: `${user.firstName}${user.lastName}@gmail.com`,
            gender: "male",
            status: "active",
        }
        cy.log(user.BaseUrl);
        cy.log(user.accesstoken);
        cy.log(user.firstName);
        cy.log(user.lastName);
        apiFramework.callPostAPIWithAuth("POST", user.BaseUrl, user.accesstoken, body, "CreateUser.json", 201);
        cy.readFile("cypress/downloads/CreateUser.json").then((data) => {
            expect(data).has.property("email",`${user.firstName}${user.lastName}@gmail.com`);
            expect(data).has.property("name", `${user.firstName} ${user.lastName}`);
            expect(data).has.property("gender", "male");
            expect(data).has.property("status", "active");
        });  
      })
  });

  it("should return newly created user with Id", () => {
    cy.readFile("cypress/downloads/CreateUser.json").then((user) => {
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