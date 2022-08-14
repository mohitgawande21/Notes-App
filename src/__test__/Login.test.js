import { shallow } from "enzyme";
import Login from "../components/Redux-Addtodo/components/Login";

describe("Component Login", () => {
    
    const wrapper = shallow(<Login />)
    const loginCompo = wrapper.find(`[data-test="LoginCompo"]`)

    console.log(wrapper.debug())
    it("login render component", () => {
        
        expect(loginCompo.length).toBe(1)
    })
})