import {Page, test} from "@playwright/test";
import {ContactsPage} from "../pages/contacs/contacts.Page";

test ('Change languages',async ({page}) => {

    await test.step('Change languages', async () => {
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
})
test ('Fill new contact' , async ({page}) =>{
        await test.step('Fill Non_existent contact', async () => {
            const contactsPage = new ContactsPage(page)
            await contactsPage.language('en')
            await contactsPage.fillNewContact()
        })
})
test ('Fill existent contact and open alert' , async ({page}) =>{
    await test.step('Fill existent contact and open alert', async ()=>{
        const contactsPage = new ContactsPage(page)
        await contactsPage.fillExistentContactAndOpenAlert()
    })
})
test ('Delete contact', async ({page}) => {
    await test.step('Delete contact', async () =>{
        const contactsPage = new ContactsPage(page)
        await contactsPage.fillExistentContactAndDeleteIt()
    })
})
test ("Try to add new contact", async ({page}) => {
    await test.step('Try to add new contact', async () => {
        const contactsPage = new ContactsPage(page)
        await contactsPage.addNewContactAndCancelIt()
    })
})
test ('Add new contact' , async ({page}) => {
    await test.step('Add new contact', async () => {
        const contactsPage = new ContactsPage(page)
        await contactsPage.addNewContact()
    })
})