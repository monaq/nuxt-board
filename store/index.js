import Vuex from "vuex";

/* eslint-disable no-param-reassign */
const store = () => new Vuex.Store({
  state: {
    items: {
      todo: [],
      doing: [],
      done: []
    },
    nextId: 1
  },
  mutations: {
    addItem(state, item) {
      state.items.todo.push(Object.assign(item, { id: state.nextId }));
      state.nextId += 1;
    },
    updateItems(state, { items, id }) {
      state.items[id] = items;
    }
  }
});

export default store
