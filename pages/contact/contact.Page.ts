import {expect, Locator, Page} from "@playwright/test";

export class ContactPage {
    private readonly page:Page;
    private readonly information: Locator
    private readonly phoneNumbers: Locator
    private readonly email: Locator
    private readonly addresses: Locator
    //info
    private readonly edit: Locator
    private readonly name: Locator
    private readonly surname: Locator
    private readonly description: Locator
    private readonly cancel: Locator
    private readonly submit: Locator
    //Phone numbers
    private readonly phoneSearch: Locator
    private readonly phoneSearchResult: Locator
    private readonly addNewPhoneNumber: Locator
    private readonly countryCod: Locator
    private readonly phoneNumber: Locator
    private readonly noResultsAlert: Locator
    private readonly countryCodDropdown: Locator
    private readonly phoneNumberField: Locator
    private readonly saveNewPhoneNumber: Locator
    private readonly phoneActions: Locator
    private readonly changePhoneNumber: Locator
    private readonly removePhoneNumber: Locator
    //Email
    private readonly emailSearch: Locator
    private readonly searchResult: Locator
    private readonly emailAddress: Locator
    private readonly addNewEmail: Locator
    private readonly fillNewEmail: Locator
    private readonly closeAlert: Locator
    private readonly fillInfo: Locator
    private readonly saveNewEmail: Locator
    private readonly actions: Locator
    private readonly changeEmail: Locator
    private readonly removeEmail: Locator
    //Addresses
    private readonly addressSearch: Locator
    private readonly country: Locator
    private readonly city: Locator
    private readonly index: Locator
    private readonly street: Locator
    private readonly addNewAddress: Locator
    private readonly closeAddressAlert: Locator
    private readonly saveNewAddress: Locator
    private readonly countrySelect: Locator
    private readonly citySelect: Locator
    private readonly zipSelect: Locator
    private readonly streetSelect: Locator

    constructor(page:Page) {
        this.page = page
        this.information = page.locator('#ngb-nav-2')
        this.phoneNumbers = page.locator('#ngb-nav-3')
        this.email = page.locator('#ngb-nav-4')
        this.addresses = page.locator('#ngb-nav-5')
        //info
        this.edit = page.locator('#btn-edit-contact')
        this.name = page.getByRole("textbox",{name:('input-ec-firstName')})
        this.surname = page.getByRole('textbox',{name:('input-ec-lastName')})
        this.description = page.getByRole('textbox',{name:('input-ec-description')})
        this.cancel = page.locator('.cancel-btn-ec')
        this.submit =page.locator('.submit-btn-ec')
        //Phone numbers
        this.phoneSearch = page.locator('#search')
        this.phoneSearchResult = page.getByText('111111')
        this.addNewPhoneNumber = page.locator('#btn-add-phone')
        this.countryCod = page.getByText('Код страны ')
        this.phoneNumber = page.getByText('Номер телефона ')
        this.noResultsAlert = page.locator('.alert.text-center')
        this.countryCodDropdown = page.locator('#cc-select')
        this.phoneNumberField = page.locator('#selected-cc')
        this.saveNewPhoneNumber = page.locator('.btn.btn-primary')
        this.phoneActions = page.locator('.btn.btn-block').first()
        this.changePhoneNumber =page.locator('.btn-phone-edit')
        this.removePhoneNumber = page.locator('.btn-phone-remove')
        //Email
        this.emailSearch =page.locator('search')
        this.searchResult = page.getByText('ZX@gmail.co').first()
        this.emailAddress = page.getByText('Эл. адрес ')
        this.addNewEmail = page.locator('#btn-add-phone')
        this.fillNewEmail = page.locator('#input-email')
        this.closeAlert= page.getByLabel('Close')
        this.fillInfo = page.locator('.alert.alert-info')
        this.saveNewEmail = page.locator('.btn.btn-primary')
        this.actions = page.locator('.btn.btn-block').first()
        this.changeEmail = page.locator('.btn-email-edit').first()
        this.removeEmail = page.locator('.btn-email-remove').first()
        //Addresses
        this.addressSearch = page.locator('#search')
        this.country =page.locator('.sort-by-country')
        this.city = page.locator('.sort-by-city')
        this.index = page.locator('.sort-by-zip')
        this.street = page.locator('sort-by-street')
        this.addNewAddress = page.locator('.btn-add-phone')
        this.closeAddressAlert= page.getByLabel('Close')
        this.saveNewAddress = page.locator('.btn.btn-primary')
        this.countrySelect = page.locator('#cc-select')
        this.citySelect = page.locator('#input-city')
        this.zipSelect = page.locator('#input-zip')
        this.streetSelect = page.locator('#input-street')

    }
    async address(country: string = "", city: string = "", zip: string = "", street: string = ""){
        await this.page.goto('/:8080/contacts/2265')
        await this.page.locator('[value = ${address}]')
    }
    async editContactInfoAndCancel (){
        await this.page.goto('/:8080/contacts/2265')
        await this.edit.click()
        await this.name.fill('dsaq')
        await this.surname.fill('ewfz')
        await this.description.fill('like`s potato')
        await this.cancel.click()
    }
    async editContact(){
        await this.page.goto('/:8080/contacts/2265')
        await this.edit.click()
        await this.name.fill('dsaq')
        await this.surname.fill('ewfz')
        await this.description.fill('like`s potato')
        await this.submit.click()
    }
    async FillNotCorrectEmail(){
        await this.page.goto('/:8080/contacts/2265')
        await this.email.click()
        await this.addNewEmail.click()
        await this.fillNewEmail.fill('sad')
        await expect.soft(this.fillInfo).toBeVisible()
        await expect.soft(this.saveNewEmail).toBeDisabled()
        await this.closeAlert.click()
    }
    async FillCorrectEmail(){
        await this.addNewEmail.click()
        await this.fillNewEmail.fill('ZX@gmail.com')
        await expect.soft(this.fillInfo).toBeVisible()
        await expect.soft(this.saveNewEmail).not.toBeDisabled()
        await this.saveNewEmail.click()
        await this.emailSearch.fill('ZX@gmail.com')
        await expect.soft(this.searchResult).toBeVisible()
    }
    async ChangeEmail(){
        await this.actions.click()
        await this.changeEmail.click()
        await this.fillNewEmail.fill('fer@gmail.co')
        await this.saveNewEmail.click()
        await this.emailSearch.fill('fer@gmail.co')
        await expect.soft(this.searchResult).toBeVisible()
    }
    async DeleteEmail (){
        await this.actions.click()
        await this.removeEmail.click()
        await this.emailSearch.fill('fer@gmail.co')
        await expect.soft(this.searchResult).not.toBeVisible()
    }
    async AddWrongPhoneNumber(countryCod: string = ""){
        await this.page.goto('/:8080/contacts/2265')
        await this.addNewPhoneNumber.click()
        await this.page.locator(`[value=${countryCod}]`)
        await this.phoneNumberField.fill('1234a')
        await expect.soft(this.saveNewPhoneNumber).toBeDisabled()
    }
    async AddNewPhoneNumber(countryCod: string = ""){
        await this.page.goto('/:8080/contacts/2265')
        await this.addNewPhoneNumber.click()
        await this.page.locator(`[value=${countryCod}]`)
        await this.phoneNumberField.fill('12344')
        await expect.soft(this.saveNewPhoneNumber).not.toBeDisabled()
    }
    async ChangePhoneNumber(countryCod: string = ""){
        await this.phoneActions.click()
        await this.changePhoneNumber.click()
        await this.page.locator(`[value=${countryCod}]`)
        await this.phoneNumberField.fill('111111')
        await this.saveNewPhoneNumber.click()
        await this.phoneSearch.fill('111111')
        await expect.soft(this.phoneSearchResult).toBeVisible()
    }
    async DeletePhoneNumber(){
        await this.phoneActions.click()
        await this.removePhoneNumber.click()
        await this.phoneSearch.fill('111111')
        await expect.soft(this.phoneSearchResult).not.toBeVisible()
    }
}
