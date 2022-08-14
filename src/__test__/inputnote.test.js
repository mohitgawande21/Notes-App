import { shallow } from "enzyme/build";
import InputNote from "../components/Redux-Addtodo/components/InputNote";
import PropTypes from "prop-types"
describe('Input Note Component', () => {

    describe('check PropTypes', () => {
        it('should no throw warning to chechPropTyeps', () => {
            const expectedProps = {
                id: "",
                title: "",
                des: ""
            }
            const propstyepsCheck = PropTypes.checkPropTypes(InputNote.propTypes, expectedProps, 'props', InputNote.name)
            expect(propstyepsCheck).toBeUndefined()
        })
    })

    describe('should render with props', () => {
        const inputData = {
            id:0,
            title: "",
            des: ""
        }
        it('should render inputNote component with props', () => {
            const wrapper = shallow(<InputNote inputData={inputData} />)
            const inputNote = wrapper.find(`[data-test='inputNoteCompo']`)
            expect(inputNote.length).toBe(1)
        })
    })
})
