import {shallowMount} from '@vue/test-utils'
import NormalCall from "../NormalCall";

jest.mock('../../clients/people', () => ({
    getCharacter: jest.fn().mockResolvedValue({name: "Luke Skywalker"})
}))

describe('NormalCall.vue', () => {
    it('should mount component successfully', () => {
        const wrapper = shallowMount(NormalCall)
        expect(wrapper.exists()).toBeTruthy()
    })
})
