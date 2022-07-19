import {shallowMount} from '@vue/test-utils'
import PluginCall from "../PluginCall";

describe('PluginCall.vue', () => {
    it('should mount component successfully', () => {
        const wrapper = shallowMount(PluginCall, {
            mocks: {
                $api: {
                    getCharacter: jest.fn().mockResolvedValue({name: "Luke Skywalker"})
                }
            }
        })
        expect(wrapper.exists()).toBeTruthy()
    })
})
