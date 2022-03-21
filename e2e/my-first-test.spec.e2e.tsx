import { Selector } from 'testcafe'


fixture('Getting Started')
    // .page( 'localhost:3000' );
    .page( '127.0.0.1:3000' );

test('fill out and Submit',async testController =>{
    await testController
        .typeText('#username','Florian')
        .typeText('#password','123')
        .click('#button-Login')

    await testController.expect(Selector('#root > section > h1').innerText).eql('Wilkommen auf Florians To-do liste');

})