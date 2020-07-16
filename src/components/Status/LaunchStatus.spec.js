import { shallow } from 'enzyme';
import React from "react";
import Tag from "../Status/Tag";
import LaunchStatus from "./LaunchStatus";

describe('LaunchStatus', () => {
    const testLaunch = {changed: "2019-03-23 22:40:18", failreason: "",
        hashtag: "", holdreason: "", id: 1829, infoURL: null, infoURLs: [],
        inhold: 0, isoend: "19610131T202119Z", isonet: "19610131T202119Z",
        isostart: "19610131T202119Z", location: {pads: Array(1), id: 18, name: "Vandenberg AFB, CA, USA", infoURL: "", wikiURL: ""},
        lsp: {id: 161, name: "United States Air Force", abbrev: "USAF", countryCode: "USA", type: 1, wikiURL: "http://en.wikipedia.org/wiki/United_States_Air_Force"},
        missions: [], name: "Atlas LV-3A | Samos 2", net: "January 31, 1961 20:21:19 UTC", netstamp: 0,
        probability: 0, rocket: {id: 193, name: "Atlas LV-3A", configuration: "LV-3A", familyname: "Atlas", agencies: [],
            imageURL: "https://launchlibrary1.nyc3.digitaloceanspaces.com/RocketImages/placeholder_1920.png",
            imageSizes: [320, 480, 640, 720, 768, 800, 960, 1024, 1080, 1280, 1440, 1920], infoURLs: [], wikiURL: "https://en.wikipedia.org/wiki/Atlas-Agena"},
        status: 3, tbddate: 0, tbdtime: 0, vidURL: null, vidURLs: [], westamp: 0, windowend: "January 31, 1961 20:21:19 UTC",
        windowstart: "January 31, 1961 20:21:19 UTC", wsstamp: 0}
    const success = <Tag label="Succeed"/>
    const  failed = <Tag label="Failed"/>
    let wrapper;

    const mountLaunchStatus = () => {
        return shallow(
            <LaunchStatus status={testLaunch.status}/>,
            {lifecycleExperimental: true, attachTo: document.createElement('div')}
        );
    };

    beforeEach(() => {
        wrapper = mountLaunchStatus();
    });

    it('renders Success Tag in LaunchStatus if launch status is 3', () => {
        testLaunch.status = 3;
        wrapper = mountLaunchStatus();
        expect(wrapper).toContainReact(success);
    });

    it('renders Failed Tag in LaunchStatus if launch status is 4', () => {
        testLaunch.status = 4;
        wrapper = mountLaunchStatus();
        expect(wrapper).toContainReact(failed);
    });
});