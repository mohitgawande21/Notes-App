import { shallow } from "enzyme";
import React from "react";
import Footer from "../components/Redux-Addtodo/components/Footer"

describe('Footer Component', () => {

    const wrapper = shallow(<Footer />)
    const footerCompo = wrapper.find(`[data-test="footerCompo"]`)

    it('should render footer component',()=>{
        expect(footerCompo.length).toBe(1)
    })
})