import {Role, Selector} from 'testcafe'

const testUser = Role('http://127.0.0.1:3000', async testController => {
    await testController
        .typeText('#Input-Username', 'TestUser')
        .typeText('#Input-Password', 'TestPassword')
        .click('#\\#button-LogIn');
});
const testUserWorngCredentials = Role('http://127.0.0.1:3000', async testController => {
    await testController
        .typeText('#Input-Username', 'TestUserr')
        .typeText('#Input-Password', 'TestPasswordd')
        .click('#\\#button-LogIn');
});

const dopDownSelect = async (testController, id) => {
    const prioritySelector = Selector('#addForm > div:nth-child(3) > select');
    const priorityOptions = prioritySelector.find('option');
    await testController
        .click('#root > div.main_div__3ZTL7 > div.main_buttonsDiv__8MzRo > div.button_myTrigger__2shFM')
        .typeText('#addForm > div:nth-child(1) > input[type=text]', 'Ich bin ein Test Todo')
        .click(prioritySelector)
        .click(priorityOptions.withText(`${id}`))
        .click('#addForm > div.button_myTrigger__2shFM');
}

fixture('TodoList End2End Test')
    .page('127.0.0.1:3000')
    .beforeEach(testController => testController.useRole(testUser))
    .afterEach(async testController => {
        // const listItems = Selector('#root > div.main_div__3ZTL7 > div.TodoList_list__ei2rf > table > tbody > tr');
    //     const counter = await listItems.count
    //     if (counter > 0) {
    //         await testController.click('#root > div.main_div__3ZTL7 > div.main_buttonsDiv__8MzRo > div:nth-child(3)')
    //         for (let i = 0; i < counter; i++) {
    //             await testController.click(listItems.nth(0));
    //         }
            await testController.click('#Avatar-Button')
            await testController.click('#Avatar-Button-Logout')
            await testController.useRole(Role.anonymous())
        }
    );

test('Login not existing user', async testController => {
    const UserLoggedIn = Selector('#Typography-UserLoggedIn');
    await testController.expect(UserLoggedIn.exists).notOk();
})
    .before(testController => testController.useRole(testUserWorngCredentials))

test('Login existing user', async testController => {
    const todoHeader = Selector('#Typography-UserLoggedIn');
    await testController.expect(todoHeader.exists).ok();
})
//
// test('Create and Delete Todos', async testController => {
//     const listItems = Selector('#root > div.main_div__3ZTL7 > div.TodoList_list__ei2rf > table > tbody > tr');
//
//     for (let i = 1; i <= 4; i++) {
//         await dopDownSelect(testController, i);
//     }
//     await testController.expect(listItems.count).eql(4);
//     await testController.click('#root > div.main_div__3ZTL7 > div.main_buttonsDiv__8MzRo > div:nth-child(3)')
//     await testController.click(listItems.nth(0));
//     await testController.expect(listItems.count).eql(3);
//     await testController.click('#root > div.main_div__3ZTL7 > div.main_buttonsDiv__8MzRo > div:nth-child(3)')
// });
//
// test('set new Todo Done and UnDone', async testController => {
//     const listItems = Selector('#root > div.main_div__3ZTL7 > div.TodoList_list__ei2rf > table > tbody > tr');
//     const imgDone = listItems.find('img').withAttribute('src', '/static/media/1.20543eb9.png');
//     const imgUnDone = listItems.find('img').withAttribute('src', 'data:image/png;base64,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AABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAw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');
//
//     await dopDownSelect(testController, 3);
//     await testController.click(listItems.find('img'));
//     await testController.expect(imgDone.exists).ok();
//     await testController.click(listItems.find('img'));
//     await testController.expect(imgUnDone.exists).ok();
// })
//
// test('Todo still exist after Page reload', async testController => {
//     const listItems = Selector('#root > div.main_div__3ZTL7 > div.TodoList_list__ei2rf > table > tbody > tr');
//
//     await dopDownSelect(testController, 1);
//     await testController.eval(() => location.reload());
//     await testController.expect(listItems.count).eql(1);
// })
//
// test('Todo still exist after logout and new Login', async testController => {
//     const listItems = Selector('#root > div.main_div__3ZTL7 > div.TodoList_list__ei2rf > table > tbody > tr');
//
//     await dopDownSelect(testController, 1);
//     await testController.useRole(Role.anonymous());
//     await testController.useRole(testUser);
//     await testController.expect(listItems.count).eql(1);
// })
//
// test('Todo remains deleted after logout and new Login', async testController => {
//     const listItems = Selector('#root > div.main_div__3ZTL7 > div.TodoList_list__ei2rf > table > tbody > tr');
//
//     await dopDownSelect(testController, 1);
//     await testController.click('#root > div.main_div__3ZTL7 > div.main_buttonsDiv__8MzRo > div:nth-child(3)');
//     await testController.click(listItems.nth(0));
//     await testController.click('#root > div.main_div__3ZTL7 > div.main_buttonsDiv__8MzRo > div:nth-child(3)');
//     await testController.useRole(Role.anonymous());
//     await testController.useRole(testUser);
//     await testController.expect(listItems.count).eql(0);
// })