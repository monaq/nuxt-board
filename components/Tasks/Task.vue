<template>
  <div class="card">
      <h3 class="card-header">{{ title }}</h3>
      <div class="card-body">
        <draggable v-model="draggables" :options="{ group: 'default' }">
          <div v-for="(item, index) in items" :key="index">
              <item :item="item"></item>
          </div>
        </draggable>
      </div>
      <div class="card-footer text-muted">
          {{itemCount}}
      </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import TaskItem from './TaskItem';
export default {
  name: 'Task',
  props: ['items', 'title', 'id'],
  components: {
    item: TaskItem,
    draggable: Draggable
  },
  computed: {
    itemCount() {
      if (!this.items) return '';
      if (this.items.length === 1) return '1 task';
      return `${this.items.length} tasks`;
    },
    draggables: {
      get() {
        return this.items;
      },
      set(items) {
        this.$store.commit('updateItems', {
          items,
          id: this.id
        });
      }
    }
  }
};
</script>

<style>
.card-body > * {
  min-height: 50px;
}

</style>
