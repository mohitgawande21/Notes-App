import { shallow } from "enzyme/build";
import Spinner from "../components/Redux-Addtodo/components/Spinner"

describe('Spinner Component', () => {
    const wrapper = shallow(<Spinner />)
    const spinnercompo=wrapper.find(`[data-test="spinnerCompo"]`)
    it('should render spinner component', () => {
        expect(spinnercompo.length).toBe(1)
    })
})