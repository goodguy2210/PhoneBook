import {Locator, Page} from "@playwright/test";

export class ContactPage {
    private readonly page:Page;
    private readonly information: Locator
    private readonly phoneNumbers: Locator
    private readonly email: Locator
    private readonly addresses: Locator
    //info
    private readonly edit: Locator
    //Phone numbers
    private readonly phoneSearch: Locator
    private readonly addNewPhoneNumber: Locator
    private readonly countryCod: Locator
    private readonly phoneNumber: Locator
    private readonly noResultsAlert: Locator
    //Email
    private readonly emailSearch: Locator
    private readonly emailAddress: Locator
    private readonly addNewEmail: Locator
    //Addresses
    private readonly addressSearch: Locator
    private readonly country: Locator
    private readonly city: Locator
    private readonly index: Locator
    private readonly street: Locator

    constructor(page:Page) {
        this.page = page
        this.information = page.locator('#ngb-nav-2')
        this.phoneNumbers = page.locator('#ngb-nav-3')
        this.email = page.locator('#ngb-nav-4')
        this.addresses = page.locator('#ngb-nav-5')
        //info
        this.edit = page.locator('#btn-edit-contact')
        //Phone numbers
        this.phoneSearch = page.locator('#search')
        this.addNewPhoneNumber = page.locator('#btn-add-phone')
        this.countryCod = page.getByText('Код страны ')
        this.phoneNumber = page.getByText('Номер телефона ')
        this.noResultsAlert = page.locator('.alert.text-center')
        //Email
        this.emailSearch =page.locator('search')
        this.emailAddress = page.getByText('Эл. адрес ')
        this.addNewEmail = page.locator('#btn-add-phone')
        //Addresses
        this.addressSearch = page.locator('#search')
        this.country =page.locator('.sort-by-country')
        this.city = page.locator('.sort-by-city')
        this.index = page.locator('.sort-by-zip')
        this.street = page.locator('sort-by-street')

    }
    async (){

    }
}