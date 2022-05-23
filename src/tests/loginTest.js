import { ClientFunction, Selector } from 'testcafe';

fixture`Login`.page`localhost:3000/login`;

test('Successful Login', async t => {
    await t
        .typeText('#test', 'm@r.co')
        .typeText('#pass', 'pw')
        .click('#btn')

    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('/');
});

test('Click register', async t => {
    await t
        .click('#register')

    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('/Register');
});
