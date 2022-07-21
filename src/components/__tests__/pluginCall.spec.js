import {shallowMount} from '@vue/test-utils'
import PluginCall from "../PluginCall";

describe('PluginCall.vue', () => {
    it('should mount component successfully', async () => {
        const wrapper = shallowMount(PluginCall, {
            mocks: {
                $api: {
                    getCharacter: jest.fn().mockResolvedValue({name: "Luke Skywalker"})
                }
            }
        })

        // If you need to change return value after mounting the component
        wrapper.vm.$api.getCharacter.mockResolvedValue({name: "Dart Wader"})

        expect(wrapper.exists()).toBeTruthy()
    })
})
