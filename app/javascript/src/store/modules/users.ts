import { Module, ActionContext } from "vuex";
import Gateway from "../../lib/gateway";

const gateway = new Gateway();

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
  setUsers(state: UsersState, payload: UsersState["users"]) {
    state.users = payload;
  },
};

const actions = {
  async loadUsers({ commit }: ActionContext<UsersState, any>) {
    const response = await gateway.get("/ajax/users");
    commit("setUsers", response.data);
    return response;
  },
};

export type UsersGetters = typeof getters;
export type UsersMutations = typeof mutations;
export type UsersActions = typeof actions;

export const users: Module<UsersState, any> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
