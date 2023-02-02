import {Page, test} from "@playwright/test";
import {ContactsPage} from "../pages/contacs/contacts.Page";

test ('check contacts page',async ({page}) =>{

    await test.step('Change languages',async () =>{
        const contactsPage = new ContactsPage(page)
        await contactsPage.language('en')
        await contactsPage.changeLanguageEN()
        await contactsPage.language('ru')
        await contactsPage.changeLanguageRU()
        await contactsPage.language('uk')
        await contactsPage.changeLanguageUKR()
        await contactsPage.language('de')
        await contactsPage.changeLanguageDe()
    })
    await test.step('Fill Non_existent contact', async () =>{
        const contactsPage = new ContactsPage(page)
        await contactsPage.language('en')
        await contactsPage.fillNon_existentContact()
    })
    await test.step('Fill existent contact and open alert', async ()=>{
        const contactsPage = new ContactsPage(page)
        await contactsPage.fillExistentContactAndOpenAlert()
    })
    await test.step('Delete contact', async () =>{
        const contactsPage = new ContactsPage(page)
        await contactsPage.fillExistentContactAndDeleteIt()
    })
    await test.step('Try to add new contact', async () =>{
        const contactsPage = new ContactsPage(page)
        await contactsPage.addNewContactAndCancelIt()
    })
    await test.step('Add new contact', async () => {
        const contactsPage = new ContactsPage(page)
        await contactsPage.addNewContact()
    })
})