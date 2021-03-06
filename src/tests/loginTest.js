import { ClientFunction, Selector } from 'testcafe';

fixture`Login`.page`http://165.227.144.141:4004/login`;

test('Successful Login', async t => {
    await t
        .typeText('#test', 'm@r.co')
        .typeText('#pass', 'pw')
        .click('#btn')

    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('/');
});

test('Unsuccessful Login', async t => {
    try {
        await t
            .typeText('#test', 'a.dk')
            .typeText('#pass', 'pw')
            .click('#btn')
    } catch (e) {
        await t.expect(e.message).contains('Request failed with status code 400');
    }});

test('Click register', async t => {
    await t
        .click('#register')

    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('/Register');
});
