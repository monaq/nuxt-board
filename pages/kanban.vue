<template>
  <div class="board">
    <div class="row">
        <div class="col-md">
          <Task id="todo" title="Todo" :items="todoItems"></Task>
        </div>
        <div class="col-md">
          <Task id="doing" title="Doing" :items="doingItems"></Task>
        </div>
        <div class="col-md">
          <Task id="done" title="Done" :items="doneItems"></Task>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Task from '../components/Tasks/Task'
export default {
  components: {
    'Task': Task
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    doingItems: s => s.items.doing,
    doneItems: s => s.items.done
  })
};
</script>
