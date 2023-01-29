import { test, expect } from '@playwright/test';
import {LoginPage} from "../pages/login/loginPage";

test('Login', async ({ page }) => {

    await test.step('Fill correct email and password' , async () =>{
        const loginPage = new LoginPage(page)
        await loginPage.login('test@gmail.com','test@gmail.com')
        await loginPage.checkAlertsAboutPasswordAndEmail
    })
    await test.step('Fill wrong email and password', async () =>{
        const loginPage = new LoginPage(page)
        await loginPage.login('igor185097@gmail.com','sdffggewqzsdfsd')
        await loginPage.fillCorrectPasswordAndWrongEmail()
    })
    await test.step('Fill correct email and wrong password' , async ()=>{
        const loginPage = new LoginPage(page)
        await loginPage.login('test@gmail.com','fdgdgfdgdfg')
        await loginPage.fillCorrectEmailAndWrongPassword()
    })
    await test.step('Fill too short password' , async  () =>{
        const loginPage = new LoginPage(page)
        await loginPage.login('test@gmail.com','sdffdsf')
        await loginPage.fillTooShortPassword()
    })
    await test.step('Not fill email' , async ()=>{
        const loginPage = new LoginPage(page)
        await loginPage.login('','test@gmail.com')
        await loginPage.notFillEmail()
    })
    // positive:
    //  1 fill test@gmail.com' in login field
    //  2 fill test@gmail.com in password field
    //  3 click login button
    // 1 negative:
    // 1 fill wrong login in login field
    // 2 click login button
    // 2 negative:
    // 1 fill wrong password in password field
    // 2 click login button
    // 3 negative:
    // 1 do not fill login in login field
    // 2 click login button
    // 4 negative:
    // 1 do not fill password in password field
    // 2 click login button
    // 5 negative:
    // 1 do not fill anything
    // 2 click login button
});