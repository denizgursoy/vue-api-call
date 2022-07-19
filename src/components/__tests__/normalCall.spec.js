import {shallowMount} from '@vue/test-utils'
import NormalCall from "../NormalCall";

jest.mock('../../clients/people', () => ({
    getCharacter: jest.fn().mockResolvedValue({name: "Luke Skywalker"})
}))

describe('NormalCall.vue', () => {
    it('renders props.msg when passed', () => {
        const wrapper = shallowMount(NormalCall)
        expect(wrapper.exists()).toBeTruthy()
    })
})
