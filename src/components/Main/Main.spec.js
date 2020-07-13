import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from './Main';
import { MemoryRouter } from 'react-router'
import {Route} from 'react-router-dom';
import AppContainer from "../AppContainer/AppContainer";
import LaunchDetails from "../LaunchDetails/LaunchDetails";

describe('main using memory router', () => {
    it('should show AppContainer component for / router (using memory router)', () => {
        const component = mount(<MemoryRouter initialentries="{['/']}">
                <Main/>
            </MemoryRouter>
        );
        expect(component.find(AppContainer)).toHaveLength(1);
        expect(component.find(LaunchDetails)).toHaveLength(0);
    })
    it('should show LaunchDetails component for /:launchId router (using memory router)', () => {
        const component = mount(<MemoryRouter initialentries="{['/233']}">
                <Main/>
            </MemoryRouter>
        );
        expect(component.find(LaunchDetails)).toHaveLength(1);
        expect(component.find(AppContainer)).toHaveLength(0);
    })
    it('invalid path should not redirect to LaunchDetails', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/random' ]}>
                <Main/>
            </MemoryRouter>
        );
        expect(wrapper.find(AppContainer)).toHaveLength(1);
        expect(wrapper.find(LaunchDetails)).toHaveLength(0);
    });
})