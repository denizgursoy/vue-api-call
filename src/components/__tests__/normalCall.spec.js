import {shallowMount} from '@vue/test-utils'
import NormalCall from "../NormalCall";
import {getCharacter} from "../../clients/people"

// To mock imports in a file
jest.mock('../../clients/people', () => ({
    getCharacter: jest.fn().mockResolvedValue({name: "Luke Skywalker"})
}))

describe('NormalCall.vue', () => {
    it('should mount component successfully', async () => {
        const wrapper = shallowMount(NormalCall)

        // If you need to change return after mounting the component
        // You have to import the file again to change returned value and mock as shown
        getCharacter.mockResolvedValue({name: "Dart Wader"})

        expect(wrapper.exists()).toBeTruthy()
    })
})
