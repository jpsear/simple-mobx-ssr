import Header from './Header';

describe('Testing Header', function () {

    it('Renders a h2 tag', () => {
        const component = mount(
            <Header/>
        );

        let h2 = component.find('h2');

        expect(h2.length).toEqual(1);
    });

});