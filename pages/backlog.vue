<template>
  <div id="Backlog" class="container">
    <NewItemForm />
    <div>
      <div class="card" v-for="(item, index) in items" :key="index">
        <div class="card-block">
          {{item.text}}
          <b-badge pill :variant="badgeClass(item)">{{badgeText(item)}}</b-badge>
        </div>
        <span><b-badge variant="dark" @click="deleteItem(badgeText(item), item.id)">delete</b-badge></span>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import NewItemForm from './NewItemForm'

  const badges = {
    todo: {
      text: 'todo',
      class: 'primary'
    },
    doing: {
      text: 'doing',
      class: 'success'
    },
    done: {
      text: 'done',
      class: 'secondary'
    }
  }

  export default {
    name: "Backlog",
    components: {
      NewItemForm
    },
    computed: mapState({
      items: s => [...s.items.todo, ...s.items.doing, ...s.items.done]
    }),
    methods: {
      itemLane(item) {
        if (this.$store.state.items.todo.includes(item)) {
          return 'todo'
        } else if (this.$store.state.items.doing.includes(item)) {
          return 'doing'
        }
        return 'done'
      },
      badgeText(item) {
        const lane = this.itemLane(item)
        return badges[lane].text
      },
      badgeClass(item) {
        const lane = this.itemLane(item)
        return badges[lane].class
      },
      deleteItem(itemLane, id) {
        this.$store.commit('deleteItem', {
          itemLane,
          id
        })
      }
    }
  };
</script>

<style scoped>
  .card {
    margin-bottom: 10px;
  }

  .card:last-child {
    margin-bottom: 25px;
  }

  .card-block {
    padding: 15px;
  }

  .badge-dark {
    position: absolute;
    right: 1em;
    top: 33%;
    cursor: pointer;
  }
</style>
