import { type } from 'os';
import { ClientFunction, Selector } from 'testcafe';

fixture`Login`.page`http://165.227.144.141:4004/login`;

test('Successful Login and find create event button on matches page', async t => {
    await t
        .typeText('#test', 'org@r.co')
        .typeText('#pass', 'Password123')
        .click('#btn')
        .click('#navMatches')

    const createButton = Selector('#createEvent').exists;

    await t.expect(createButton).ok();
});

const team1Select = Selector('#team1');
const team2Select = Selector('#team2');
const team1Option = team1Select.find('option');
const team2Option = team2Select.find('option');

test('create event successful', async t => {

    await t
        .typeText('#test', 'org@r.co')
        .typeText('#pass', 'Password123')
        .click('#btn')
        .click('#navMatches')
        .click('#createEvent')
        .click(team1Select)
        .click(team1Option.withText('Cloud9'))
        .click(team2Select)
        .click(team2Option.withText('Virtus.pro'))
        .typeText('#date', '2022-12-12T12:12')
        .typeText('#description', 'test')
        .typeText('#price', '100')
        .typeText('#game', 'Counter-Strike: Global Offensive')
        .click('.btn_CallToAction_Blue')
});

//test if both team are the same give alert
test('create event with same team', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert'){
                if (text === 'The teams cannot be the same') {
                    return true;
                }
            }
            return null;
        })
        .typeText('#test', 'org@r.co')
        .typeText('#pass', 'Password123')
        .click('#btn')
        .click('#navMatches')
        .click('#createEvent')
        .click(team1Select)
        .click(team1Option.withText('Cloud9'))
        .click(team2Select)
        .click(team2Option.withText('Cloud9'))
        .typeText('#date', '2022-12-12T12:12')
        .typeText('#description', 'test')
        .typeText('#price', '100')
        .typeText('#game', 'Counter-Strike: Global Offensive')
        .click('.btn_CallToAction_Blue')


    const history = await t.getNativeDialogHistory();
    await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Teams cannot be the same');
});

//test if date is empty give alert
test('create event with empty date', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert'){
                if (text === 'Date is required') {
                    return true;
                }
            }
            return null;
        })
        .typeText('#test', 'org@r.co')
        .typeText('#pass', 'Password123')
        .click('#btn')
        .click('#navMatches')
        .click('#createEvent')
        .click(team1Select)
        .click(team1Option.withText('Cloud9'))
        .click(team2Select)
        .click(team2Option.withText('Virtus.pro'))
        .typeText('#description', 'test')
        .typeText('#price', '100')
        .typeText('#game', 'Counter-Strike: Global Offensive')
        .click('.btn_CallToAction_Blue')

        const history = await t.getNativeDialogHistory();
        await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Date cannot be empty');
});

//test if date is in the past give alert
test('create event with past date', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert'){
                if (text === 'Date cannot be in the past') {
                    return true;
                }
            }
            return null;
        })
        .typeText('#test', 'org@r.co')
        .typeText('#pass', 'Password123')
        .click('#btn')
        .click('#navMatches')
        .click('#createEvent')
        .click(team1Select)
        .click(team1Option.withText('Cloud9'))
        .click(team2Select)
        .click(team2Option.withText('Virtus.pro'))
        .typeText('#date', '2019-12-12T12:12')
        .typeText('#description', 'test')
        .typeText('#price', '100')
        .typeText('#game', 'Counter-Strike: Global Offensive')
        .click('.btn_CallToAction_Blue')

        const history = await t.getNativeDialogHistory();
        await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Date cannot be in the past');
});

//test if description is empty give alert
test('create event with empty description', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert'){
                if (text === 'Description is required') {
                    return true;
                }
            }
            return null;
        })
        .typeText('#test', 'org@r.co')
        .typeText('#pass', 'Password123')
        .click('#btn')
        .click('#navMatches')
        .click('#createEvent')
        .click(team1Select)
        .click(team1Option.withText('Cloud9'))
        .click(team2Select)
        .click(team2Option.withText('Virtus.pro'))
        .typeText('#date', '2022-12-12T12:12')
        .typeText('#price', '100')
        .typeText('#game', 'Counter-Strike: Global Offensive')
        .click('.btn_CallToAction_Blue')

        const history = await t.getNativeDialogHistory();
        await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Description cannot be empty');
});

//test if price is less than or equal to 0 give alert
test('create event with price less than or equal to 0', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert'){
                if (text === 'Price must be greater than 0') {
                    return true;
                }
            }
            return null;
        })
        .typeText('#test', 'org@r.co')
        .typeText('#pass', 'Password123')
        .click('#btn')
        .click('#navMatches')
        .click('#createEvent')
        .click(team1Select)
        .click(team1Option.withText('Cloud9'))
        .click(team2Select)
        .click(team2Option.withText('Virtus.pro'))
        .typeText('#date', '2022-12-12T12:12')
        .typeText('#description', 'test')
        .typeText('#price', '0')
        .typeText('#game', 'Counter-Strike: Global Offensive')
        .click('.btn_CallToAction_Blue')

        const history = await t.getNativeDialogHistory();
        await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Price must be greater than 0');
});

//test if game is empty give alert
test('create event with empty game', async t => {
    await t
        .setNativeDialogHandler((type, text) => {
            if (type === 'alert'){
                if (text === 'Game is required') {
                    return true;
                }
            }
            return null;
        })
        .typeText('#test', 'org@r.co')
        .typeText('#pass', 'Password123')  
        .click('#btn')
        .click('#navMatches')
        .click('#createEvent')
        .click(team1Select)
        .click(team1Option.withText('Cloud9'))
        .click(team2Select)
        .click(team2Option.withText('Virtus.pro'))
        .typeText('#date', '2022-12-12T12:12')
        .typeText('#description', 'test')
        .typeText('#price', '100')
        .click('.btn_CallToAction_Blue')

        const history = await t.getNativeDialogHistory();
        await t.expect(history[0].type).eql('alert').expect(history[0].text).eql('Game cannot be empty');
});