import { Selector } from 'testcafe'
import {log} from "debug";


fixture('Getting Started')
    // .page( 'localhost:3000' );
    .page( '127.0.0.1:3000' );

test('Login existing user',async testController =>{
    await testController
        .typeText('#username','Florian')
        .typeText('#password','12333')
        .click('#button-Login')
        await testController.getBrowserConsoleMessages()
            .then(log => console.log(log.log))
    // await testController.expect(Selector('#root > section > h1').innerText).eql('Wilkommen auf Florians To-do liste');
    await testController.expect(log[0]).eql('No suitable Accout for this credentials found');
})