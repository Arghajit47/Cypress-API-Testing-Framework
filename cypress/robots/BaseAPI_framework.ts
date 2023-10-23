export abstract class ApiFramework{
    callGetAPIWithoutAuth(method:string, url:string, fileName:string, statusCode: number){
        cy.request({method: method,url: url}).then((response) =>{
            cy.writeFile(`cypress/downloads/${fileName}`, response.body);
            expect(response.status).to.eq(statusCode);
        });
    };
    callPostAPIWithoutAuth(method:string, url:string, body: object, fileName:string, statusCode:number){
        cy.request({method: method,url: url, body: body}).then((response) =>{
            cy.writeFile(`cypress/downloads/${fileName}`, response.body);
            expect(response.status).to.eq(statusCode);
        });
    };
    callPutOrPatchAPIWithoutAuth(method:string, url:string, body: object, fileName:string, statusCode:number){
        cy.request({method: method,url: url, body: body}).then((response) =>{
            cy.writeFile(`cypress/downloads/${fileName}`, response.body);
            expect(response.status).to.eq(statusCode);
        });
    };
    callDeleteAPIWithoutAuth(method:string, url:string, statusCode:number){
        cy.request({method: method,url: url}).then((response) =>{
            expect(response.status).to.eq(statusCode);
        });
    }
    callGetAPIWithAuth(method:string, url:string, accessToken: string, fileName:string, statusCode: number){
        cy.request({method: method,url: url, headers: { authorization: `Bearer ${accessToken}`}}).then((response) =>{
            cy.writeFile(`cypress/downloads/${fileName}`, response.body);
            expect(response.status).to.eq(statusCode);
        });
    };
    callPostAPIWithAuth(method:string, url:string, accessToken: string, body: object, fileName:string, statusCode:number){
        cy.request({method: method,url: url, headers: { authorization: `Bearer ${accessToken}`}, body: body}).then((response) =>{
            cy.writeFile(`cypress/downloads/${fileName}`, response.body);
            expect(response.status).to.eq(statusCode);
        });
    };
    callPutOrPatchAPIWithAuth(method:string, url:string, accessToken: string, body: object, fileName:string, statusCode:number){
        cy.request({method: method,url: url, headers: { authorization: `Bearer ${accessToken}`}, body: body}).then((response) =>{
            cy.writeFile(`cypress/downloads/${fileName}`, response.body);
            expect(response.status).to.eq(statusCode);
        });
    };
    callDeleteAPIWithAuth(method:string, url:string, accessToken: string, statusCode:number){
        cy.request({method: method,url: url, headers: { authorization: `Bearer ${accessToken}`}}).then((response) =>{
            expect(response.status).to.eq(statusCode);
        });
    }
}