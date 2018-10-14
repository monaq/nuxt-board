import Vuex from "vuex";
import Cookies from "js-cookie";
/* eslint-disable no-param-reassign */
const store = () => new Vuex.Store({
  state: {
    items: {
      todo: [],
      doing: [],
      done: []
    },
    temp: '',
    nextId: 1
  },
  mutations: {
    addItem(state, item) {
      state.items.todo.push(Object.assign(item, { id: state.nextId }));
      state.temp = JSON.stringify(state.items)

      Cookies.set('wk', state.temp)
      state.nextId += 1;
    },
    updateItems(state, { items, id }) {
      state.items[id] = items;

      const updated = JSON.stringify(state.items)
      state.temp = updated
      Cookies.set('wk', state.temp)
    },
    deleteItem(state, {itemLane, id}) {
      console.log(itemLane, id)
      const target = state.items[itemLane].find(item => item.id == id)
      state.items[itemLane].pop(target)

      const updated = JSON.stringify(state.items)
      state.temp = updated
      Cookies.set('wk', state.temp)
    },
    initItem(state) {
      return state.items
    },
    getItem(state) {
      if(Cookies.get('wk')) {
        state.temp = Cookies.get('wk')
        state.items = JSON.parse(state.temp)
      }
    }
  }
});

export default store
