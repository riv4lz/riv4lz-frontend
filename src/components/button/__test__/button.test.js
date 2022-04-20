import ReactDOM from 'react-dom';
import Btn from '../Btn';
import { render, cleanup } from '@testing-library/react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);
//test render Btn without crashing
test('render button without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Btn />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//test render Btn with text
test('render button with text', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Btn children="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//test render Btn with children prop
test('render button with render method', () => {
    const { getByTestId } = render(<Btn children="test" />);
    expect(getByTestId('btn-test')).toHaveTextContent("test");
});

//test render Btn with children and onClick prop
test('render button with render method and onClick prop', () => {
    const mockCallback = jest.fn();

    const testBtn = shallow((<Btn children="test" onClick={mockCallback} />));
    const { getByTestId } = render(testBtn);

    testBtn.simulate('click');

    expect(getByTestId('btn-test')).toHaveTextContent("test");
    expect(mockCallback.mock.calls.length).toEqual(1);
});
