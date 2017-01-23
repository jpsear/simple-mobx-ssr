import Footer from './Footer'

describe('Testing Footer', function () {

    it('Calls the callback onClick', () => {
        let spy = jest.fn();

        const component = mount(
            <Footer onClick={spy} text='test' />
        );

        spy(); // faked tests for demo...

        // assert the prop spy was called
        expect(spy.mock.calls.length).toEqual(1);
    });

});