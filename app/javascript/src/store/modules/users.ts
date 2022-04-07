import { Module, MutationTree, ActionTree } from 'vuex';

export interface UsersState {

}

const namespaced = true;

const state: UsersState = {
};

const mutations: MutationTree<UsersState> = {
};

const actions: ActionTree<UsersState, any> = {
};

export const users: Module<UsersState, any> = {
  namespaced,
  state,
  actions,
  mutations
};
