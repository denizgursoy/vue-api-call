import {shallowMount} from '@vue/test-utils'
import FetchCall from "../FetchCall";

describe('FetchCall.vue', () => {
    it('should mount component successfully',  () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve({name: "Luke Skywalker"}),
        })
        const wrapper = shallowMount(FetchCall)

        // If you need to change return value after mounting the component
        global.fetch.mockResolvedValue({
            json: () => Promise.resolve({name: "Dart Wader"}),
        })

        expect(wrapper.exists()).toBeTruthy()
    })
})
