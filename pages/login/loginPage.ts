import {expect, Locator, Page} from "@playwright/test";

export class LoginPage {
    private readonly page:Page ;
    private readonly emailField: Locator
    private readonly passwordField: Locator
    private readonly submitButton: Locator
    private readonly wrongEmail: Locator
    private readonly wrongPassword: Locator
    private readonly noPassword: Locator
    private readonly noEmail: Locator
    private readonly wrongPasswordOrEmail:Locator
    private readonly registerNewAccount: Locator
    private readonly registerEmail: Locator
    private readonly registerPassword: Locator
    private readonly confirmPassword: Locator
    private readonly sumbitRegistration: Locator

    constructor(page:Page) {
        this.page = page
        this.emailField = page.getByPlaceholder("Email")
        this.passwordField = page.getByPlaceholder("Password")
        this.submitButton = page.getByRole('button',{name: 'Login' })
        this.wrongEmail = page.getByText(' Email must be a valid email address. ')
        this.noEmail = page.getByText(' Email is required. ')
        this.wrongPassword = page.getByText(' Password must be at least 8 characters. ')
        this.noPassword = page.getByText(' Password is required. ')
        this.wrongPasswordOrEmail = page.getByText(' Please check your activation or Login + Password combination')
        this.registerNewAccount = page.getByText('Register new Account')
        this.registerEmail = page.getByPlaceholder('Email')
        this.registerEmail = page.getByPlaceholder('Password')
        this.confirmPassword = page.getByPlaceholder('Confirm Password')
        this.sumbitRegistration = page.getByRole("button",{name: 'submit'})
     //   this.searchButton = page.locator[#search-form-contact]
     //   this.noResultsAlert = page.getByRole('alert', {type: string})sdsdfsdf
    }
    async checkAlertsWithWrongData () {
        await expect.soft(this.wrongEmail).not.toBeVisible()
        await expect.soft(this.wrongPassword).not.toBeVisible()
        await expect.soft(this.noPassword).not.toBeVisible()
    }
    async fillTooShortPassword (){
        await expect.soft(this.noPassword).toBeVisible()
    }
    async notFillEmail(){
        await expect.soft(this.noEmail).toBeVisible()
    }
    async fillCorrectEmailAndWrongPassword(){
        await expect.soft(this.wrongPasswordOrEmail).toBeVisible()
    }
    async fillCorrectPasswordAndWrongEmail(){
        await expect.soft(this.wrongPasswordOrEmail).toBeVisible()
    }
    async login(email:string = '',password:string = '', language: string = 'ru'){
        await this.page.goto('/')
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.submitButton.click()
        await this.page.locator(`[value=${language}]`)
    }
}