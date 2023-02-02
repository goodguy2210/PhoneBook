import {expect, Locator, Page} from "@playwright/test";
import { faker } from '@faker-js/faker';


export class ContactsPage {
    private readonly page:Page;
    private readonly randomEmail: Locator
    private readonly contacts: Locator
    private readonly addNewContacts: Locator
    private readonly account: Locator
    private readonly exit: Locator
    private readonly logo: Locator
    private readonly searchField: Locator
    private readonly myProfile: Locator
    private readonly deleteContact: Locator
    private readonly noResults: Locator
    private readonly contact: Locator
    private readonly deleteAccountAlert:Locator
    private readonly secondDeleteButton:Locator
    private readonly deleteCheckbox: Locator
    private readonly cancelDeleteContact: Locator
    private readonly addNewContactAlert:Locator
    private readonly nameOfNewContact: Locator
    private readonly surnameOfNewContact: Locator
    private readonly aboutNewContact: Locator
    private readonly errorFirstName: Locator
    private readonly cancelAddNewContact: Locator
    private readonly saveNewContact: Locator
    //English
    private readonly searchFieldEN: Locator
    private readonly contactsEN: Locator
    //Russian
    private readonly searchFieldRU: Locator
    private readonly contactsRU: Locator
    //German
    private readonly searchFieldDE: Locator
    private readonly contactsDE: Locator
    //Ukraine
    private readonly searchFieldUKR: Locator
    private readonly contactsUKR: Locator

    constructor(page:Page) {
        this.page = page
        // Header
        this.logo = page.locator['//nav[\'navbar-toggler\']//a[\'navbar-brand\'][1]']
        this.contacts = page.locator('.nav-item  a').first()
        this.addNewContacts = page.locator["/contacts"]
        this.account = page.locator('.btn.btn-outline-warning').first()
        this.exit = page.locator['//div[\'btn-outline-warning\']//div[button]//*[ \'btn-outline-warning\'][2]']
        this.noResults = page.locator('.alert.text-center')
        // Body
        this.searchField = page.locator['#input-search-contact']
        this.myProfile = page.locator('..list-group-item.list-group-item-action').first()
        this.deleteContact = page.locator['//div[\'bg-warning\']//div//div//div[\'mr-2\']//button[2]'].first()
        this.contact = page.locator('//div[\'justify-content-between\'][3]')
        this.deleteAccountAlert = page.locator('.alert.text-center')
        this.secondDeleteButton = page.locator['//div//div//div//div//div[\'#sumbit-remove\']']
        this.deleteCheckbox =  page.locator('#check-box-remove-contact')
        this.cancelDeleteContact = page.locator('#cancel-remove-contact')
        this.addNewContactAlert = page.locator('//div//div//div//div[\'ng-pristine ng-invalid ng-touched\'][2]')
        this.nameOfNewContact = page.locator('//div/div//div//div//input[\'ng-touched\']')
        this.errorFirstName = page.locator('//div/div//div//p//ngb-alert[\'alert-danger\']').first()
        this.surnameOfNewContact = page.locator('##form-lastName')
        this.aboutNewContact = page.getByPlaceholder('About')
        this.cancelAddNewContact = page.locator('.btn.btn-secondary')
        this.saveNewContact = page.locator('.btn.btn-primary')
        const randomEmail = faker.internet.email();

        this.searchFieldEN = page.getByPlaceholder('Search...')
        this.contactsEN = page.getByText('Contacts')

        this.contactsRU = page.getByPlaceholder('Поиск...')
        this.searchFieldRU = page.getByText('Список контактов')

        this.contactsDE = page.getByText('Kontakte')
        this.searchFieldDE =page.getByPlaceholder('Suche...')

        this.contactsUKR = page.getByText('Контакти')
        this.searchFieldUKR = page.getByPlaceholder('Пошук ...')
    }

    async language(language: string = ''){
        await this.page.goto('/contacts')
        await this.page.locator(`[value=${language}]`)
    }

    async changeLanguageEN(){
        await expect.soft(this.searchFieldEN).toBeVisible()
        await expect.soft(this.contactsEN).toBeVisible()
    }
    async changeLanguageRU(){
        await expect.soft(this.searchFieldRU).toBeVisible()
        await expect.soft(this.contactsRU).toBeVisible()
    }
    async changeLanguageDe(){
        await expect.soft(this.searchFieldDE).toBeVisible()
        await expect.soft(this.contactsDE).toBeVisible()
    }
    async changeLanguageUKR(){
        await expect.soft(this.searchFieldUKR).toBeVisible()
        await expect.soft(this.contactsUKR).toBeVisible()
    }
    async fillNon_existentContact(){
        await this.searchFieldEN.fill('dsfg')
        await expect.soft(this.noResults).toBeVisible()
    }
    async fillExistentContactAndOpenAlert(){
        await this.searchFieldEN.fill(' qa361674471145')
        await expect.soft(this.contact).toBeVisible()
        await this.deleteContact.click()
        await expect.soft(this.deleteAccountAlert).toBeVisible()
        await expect.soft(this.secondDeleteButton).toBeDisabled()
        await this.deleteCheckbox.click()
        await expect.soft(this.secondDeleteButton).not.toBeDisabled()
        await this.cancelDeleteContact.click()
    }
    async fillExistentContactAndDeleteIt(){
        await this.searchFieldEN.fill(' qa361674471145')
        await expect.soft(this.contact).toBeVisible()
        await this.deleteContact.click()
        await expect.soft(this.deleteAccountAlert).toBeVisible()
        await expect.soft(this.secondDeleteButton).toBeVisible()
        await this.deleteCheckbox.click()
        await expect.soft(this.secondDeleteButton).not.toBeDisabled()
        await this.secondDeleteButton.click()
    }
    async addNewContactAndCancelIt(){
        await this.addNewContacts.click()
        await expect.soft(this.addNewContactAlert).toBeVisible()
        await expect.soft(this.errorFirstName).toBeVisible()
        await this.nameOfNewContact.fill('asdf')
        await expect.soft(this.errorFirstName).not.toBeVisible()
        await this.surnameOfNewContact.fill('sda')
        await this.aboutNewContact.fill('asdf')
        await this.cancelAddNewContact.click()
    }
    async addNewContact(){
        await this.addNewContacts.click()
        await expect.soft(this.addNewContactAlert).toBeVisible()
        await expect.soft(this.errorFirstName).toBeVisible()
        await this.nameOfNewContact.fill('asdy')
        await expect.soft(this.errorFirstName).not.toBeVisible()
        await this.surnameOfNewContact.fill('adeq')
        await this.aboutNewContact.fill('sdew')
        await this.saveNewContact.click()
    }
}