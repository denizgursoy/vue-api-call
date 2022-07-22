import {shallowMount} from '@vue/test-utils'
import FunctionCall from "../FunctionCall";
import {getCharacter} from "../../clients/people"

// To mock imports in a file
jest.mock('../../clients/people', () => ({
    getCharacter: jest.fn().mockResolvedValue({name: "Luke Skywalker"})
}))

describe('FunctionCall.vue', () => {
    it('should mount component successfully', async () => {
        const wrapper = shallowMount(FunctionCall)

        // If you need to change return value after mounting the component
        // You have to import the function to change returned value as shown below
        getCharacter.mockResolvedValue({name: "Dart Wader"})

        expect(wrapper.exists()).toBeTruthy()
    })
})
