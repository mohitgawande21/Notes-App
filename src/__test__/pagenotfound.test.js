import { shallow } from "enzyme"
import PageNotFound from "../components/Redux-Addtodo/components/PageNotFound"


describe('Page Not Foung Component', () => {
    
    const wrapper = shallow(<PageNotFound />)
    const pagenotfoundcompo = wrapper.find(`[data-test="pagenotfoundCompo"]`)

    it('should render page not found component', () => {

        expect(pagenotfoundcompo.length).toBe(1)
    })
})