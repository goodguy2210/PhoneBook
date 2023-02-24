import {test} from "@playwright/test";
import {ContactPage} from "../pages/contact/contact.Page";

test ('editContactInfo', async ({page}) =>{
    const contactPage = new ContactPage(page)
    await contactPage.editContactInfoAndCancel()
    await contactPage.editContact()
})
test ('CheckEmailPart', async ({page}) =>{
    const contactPage = new ContactPage(page)
    await contactPage.FillNotCorrectEmail
    await contactPage.FillCorrectEmail
    await contactPage.ChangeEmail
    await contactPage.DeleteEmail()
})
test ('CheckPhoneNumberPart', async ({page}) =>{
    const contactPage = new ContactPage(page)
    await contactPage.AddWrongPhoneNumber('+44')
    await contactPage.AddNewPhoneNumber('+44')
    await contactPage.ChangePhoneNumber('+44')
    await contactPage.DeleteEmail()
})
