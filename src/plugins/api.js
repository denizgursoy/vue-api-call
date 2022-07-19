import * as peopleClient from "../clients/people";
import * as planetClient from "../clients/planets";

export default {
    install(Vue) {
        Vue.prototype.$api = {
            ...peopleClient,
            ...planetClient
        };
    }
};
