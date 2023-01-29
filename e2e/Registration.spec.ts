import {test} from "@playwright/test";
import {RegistrationPage} from "../pages/registration/registrationPage";


test('Register', async ({page}) =>{

    await test.step('Fill correct data ' , async () =>{
        const registrationPage = new RegistrationPage(page)
        await registrationPage.register('igor185097@gmail.com' , 'aaaaaaaa', 'aaaaaaaa')
        await registrationPage.fillCorrectData()
    })
    await test.step('fillWrongEmailAndToShortPasswordAndAnotherConfirm',async() =>{
        const registrationPage = new RegistrationPage(page)
        await registrationPage.register('dsfg','sDadc','reg')
        await registrationPage.fillWrongEmailAndToShortPasswordAndAnotherConfirm()
    })

})