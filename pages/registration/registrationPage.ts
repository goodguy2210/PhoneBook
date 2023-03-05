import {expect, Locator, Page} from "@playwright/test";

export class RegistrationPage {
    private readonly page:Page ;
    private readonly goToRegistrationPage: Locator
    private readonly emailField: Locator
    private readonly passwordField: Locator
    private readonly confirmPasswordField: Locator
    private readonly sumbitButton: Locator
    private readonly notValidEmail: Locator
    private readonly tooShortPassword: Locator
    private readonly passwordsDoNotMatch: Locator
    private readonly goToLoginPage: Locator

    constructor(page:Page) {
        this.page = page
        this.goToRegistrationPage = page.getByText('Register new Account')
        this.emailField = page.getByPlaceholder('Email')
        this.passwordField = page.locator('.form-control.rounded-pill.ml-auto')
        this.confirmPasswordField = page.getByPlaceholder('Confirm Password')
        this.sumbitButton = page.getByText(' Sign up ')
        this.notValidEmail = page.locator('#email-error-invalid')
        this.tooShortPassword = page.locator('#password-error-minlength')
        this.passwordsDoNotMatch = page.locator('#confirm-password-error-matcher')
        this.goToLoginPage = page.getByText('Already have an account?')
    }
    async register (email:string = '',password:string = '',confirm: string = ''){
        await this.page.goto('/user/registration')
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirm)
        await this.sumbitButton.click()
    }
    async fillWrongEmailAndToShortPasswordAndAnotherConfirm (){
        await expect.soft(this.page).toHaveURL('http://phonebook.telran-edu.de:8080/user/registration')
        await expect.soft(this.notValidEmail).toBeVisible()
        await expect.soft(this.tooShortPassword).toBeVisible()
        await expect.soft(this.passwordsDoNotMatch).toBeVisible()
        
    }
    async fillCorrectData(){
        await expect.soft(this.notValidEmail).not.toBeVisible()
        await expect.soft(this.tooShortPassword).not.toBeVisible()
        await expect.soft(this.passwordsDoNotMatch).not.toBeVisible()
        await this.goToLoginPage.click()
        await expect.soft(this.page).toHaveURL('http://phonebook.telran-edu.de:8080/user/login')
    }
}
