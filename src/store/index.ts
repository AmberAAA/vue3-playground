import { createLogger, createStore, StoreOptions } from "vuex";
import log from './log'

export interface State {
    count: number
}

/**
 * INCREMENT: 假的喜加一
 */
export enum Mutations {
    /**
     * 真喜加一
     * @param number 你想欢加多少呢？默认是1 
     */
    INCREMENT = "INCREMENT"
}

export const store = createStore<State>({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        [Mutations.INCREMENT] (state, value = 1) {
            state.count+=value
        },
        // 这里的注释真无敌啊真无敌
        add (state, value) {

        }
    },
    plugins: [createLogger(), log]
})