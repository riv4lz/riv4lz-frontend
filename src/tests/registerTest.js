import { ClientFunction, Selector } from 'testcafe';

fixture`Register`.page`localhost:3000/Register`;

test('register caster user', async t => {
    await t
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 't@asdaasd.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if caster username is less than 3 characters
test('register caster user with less than 3 characters', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .typeText('#inputUsername', 'te')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if caster email is not valid
test('register caster user with invalid email', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if caster password is less than 8 characters
test('register caster user with less than 8 characters', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Passwor')
        .typeText('#inputRepeatPassword', 'Passwor')
        .click('.Btn_Login')
});

//test if caster password is not the same as repeat password
test('register caster user with different passwords', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password1234')
        .click('.Btn_Login')
});

//test if caster email is already in use
test('register caster user with already in use email', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'm@r.co')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if caster username is empty
test('register caster user with empty username', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .expect(Selector('#inputUsername').value).eql('')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if caster email is empty
test('register caster user with empty email', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .expect(Selector('#inputEmail').value).eql('')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if caster password is empty
test('register caster user with empty password', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test@test.dk')
        .expect(Selector('#inputPassword').value).eql('')
        .typeText('#inputRepeatPassword', 'password')
        .click('.Btn_Login')
});

//test if caster repeat password is empty
test('register caster user with empty repeat password', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Password123')
        .expect(Selector('#inputRepeatPassword').value).eql('')
        .click('.Btn_Login')
});

//test register organisation user
test('register organisation user', async t => {
    await t
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if organisation username is less than 3 characters
test('register organisation user with less than 3 characters', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .typeText('#inputUsername', 'te')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if organisation email is not valid
test('register organisation user with invalid email', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
}
);

//test if organisation password is less than 8 characters
test('register organisation user with less than 8 characters', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Passwor')
        .typeText('#inputRepeatPassword', 'Passwor')
        .click('.Btn_Login')
});

//test if organisation password is not the same as repeat password
test('register organisation user with different passwords', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password1234')
        .click('.Btn_Login')
});

//test if organisation email is already in use
test('register organisation user with already in use email', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'm@r.co')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if organisation username is empty
test('register organisation user with empty username', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .expect(Selector('#inputUsername').value).eql('')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if organisation email is empty
test('register organisation user with empty email', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .expect(Selector('#inputEmail').value).eql('')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if organisation password is empty
test('register organisation user with empty password', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .expect(Selector('#inputPassword').value).eql('')
        .typeText('#inputRepeatPassword', 'password')
        .click('.Btn_Login')
});

//test if organisation repeat password is empty
test('register organisation user with empty repeat password', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .expect(Selector('#inputRepeatPassword').value).eql('')
        .click('.Btn_Login')
});


//test login after register
test('login after register', async t => {
    await t
        .click('#casterBtn')
        .typeText('#inputUsername', 'aaaaaaaaaaaaa')
        .typeText('#inputEmail', 'testorg@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
        .click('.Btn_Login')
        .click('.Btn_Login')
        .click('.Btn_Login')
});



