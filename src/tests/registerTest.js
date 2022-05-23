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
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Username must be at least 3 characters long') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .typeText('#inputUsername', 'te')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')


    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Username must be at least 3 characters long');
});

//test if caster email is not valid
test('register caster user with invalid email', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Email is not validl') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Email is not valid');
});

//test if caster password is less than 8 characters
test('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Passwor')
        .typeText('#inputRepeatPassword', 'Passwor')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number');
});

//test if caster password is not the same as repeat password
test('register caster user with different passwords', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Passwords do not match') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password1234')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Passwords do not match');
});

//test if caster email is already in use
test('register caster user with already in use email', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Email already taken') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'm@r.co')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Email already taken');

});

//test if caster username is empty
test('register caster user with empty username', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Username cannot be empty') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .expect(Selector('#inputUsername').value).eql('')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Username cannot be empty');
});

//test if caster email is empty
test('register caster user with empty email', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Email cannot be empty') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .expect(Selector('#inputEmail').value).eql('')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Email cannot be empty');
});

//test if caster password is empty
test('register caster user with empty password', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Password cannot be empty') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test@test.dk')
        .expect(Selector('#inputPassword').value).eql('')
        .typeText('#inputRepeatPassword', 'password')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Password cannot be empty');
});

//test if caster repeat password is empty
test('register caster user with empty repeat password', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Passwords do not match') {
                    return true;
                }
            }
            return null;
        })
        .click('#casterBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'test@test.dk')
        .typeText('#inputPassword', 'Password123')
        .expect(Selector('#inputRepeatPassword').value).eql('')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Passwords do not match');

});

//test register organisation user
test('register organisation user', async t => {
    await t
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgetest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')
});

//test if organisation username is less than 3 characters
test('register organisation user with less than 3 characters', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Username must be at least 3 characters long') {
                    return true;
                }
            }
            return null;
        })
        .click('#orgBtn')
        .typeText('#inputUsername', 'te')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Username must be at least 3 characters long');
});

//test if organisation email is not valid
test('register organisation user with invalid email', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Email is not valid') {
                    return true;
                }
            }
            return null;
        })
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Email is not valid');
});

//test if organisation password is less than 8 characters
test('register organisation user with less than 8 characters', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number') {
                    return true;
                }
            }
            return null;
        })
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Passwor')
        .typeText('#inputRepeatPassword', 'Passwor')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number');
});

//test if organisation password is not the same as repeat password
test('register organisation user with different passwords', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Passwords do not match') {
                    return true;
                }
            }
            return null;
        })
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password1234')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Passwords do not match');
});

//test if organisation email is already in use
test('register organisation user with already in use email', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Email already taken') {
                    return true;
                }
            }
            return null;
        })
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'm@r.co')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Email already taken');
});

//test if organisation username is empty
test('register organisation user with empty username', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Username cannot be empty') {
                    return true;
                }
            }
            return null;
        })
        .click('#orgBtn')
        .expect(Selector('#inputUsername').value).eql('')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Username cannot be empty');
});

//test if organisation email is empty
test('register organisation user with empty email', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Email cannot be empty') {
                    return true;
                }
            }
            return null;
        })
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .expect(Selector('#inputEmail').value).eql('')
        .typeText('#inputPassword', 'Password123')
        .typeText('#inputRepeatPassword', 'Password123')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Email cannot be empty');
});

//test if organisation password is empty
test('register organisation user with empty password', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Password cannot be empty') {
                    return true;
                }
            }
            return null;
        })
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .expect(Selector('#inputPassword').value).eql('')
        .typeText('#inputRepeatPassword', 'password')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Password cannot be empty');
});

//test if organisation repeat password is empty
test('register organisation user with empty repeat password', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert') {
                if (text === 'Passwords do not match') {
                    return true;
                }
            }
            return null
        })
        .click('#orgBtn')
        .typeText('#inputUsername', 'test')
        .typeText('#inputEmail', 'orgtest@org.dk')
        .typeText('#inputPassword', 'Password123')
        .expect(Selector('#inputRepeatPassword').value).eql('')
        .click('.Btn_Login')

    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Passwords do not match');
});