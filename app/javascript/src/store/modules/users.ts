import { Module, MutationTree, ActionTree, GetterTree } from "vuex";

export interface UsersState {
  users: { id: number; name: string }[];
}

const namespaced = true;

const state: UsersState = {
  users: [],
};

const getters = {
  userNames(state: UsersState) {
    return state.users.map((user) => user.name);
  },
};


const mutations = {
  setUsers(state: UsersState, payload: UsersState['users']){
    state.users = payload
  }
};

const actions: ActionTree<UsersState, any> = {};

export type UsersGetters = typeof getters
export type UsersMutations = typeof mutations

export const users: Module<UsersState, any> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
