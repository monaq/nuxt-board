<template>
  <div class="board">
    <div class="row">
        <!-- <div class="col-md">
          <taskLane id="todo" title="Todo" :items="todoItems"></taskLane>
        </div>
        <div class="col-md">
          <taskLane id="inProgress" title="In progress" :items="inProgressItems"></taskLane>
        </div>
        <div class="col-md">
          <taskLane id="done" title="Done" :items="doneItems"></taskLane>
        </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import TaskLane from '../components/Tasks/TaskLane'
export default {
  // components: {
  //   'taskLane': TaskLane
  // },
  computed: mapState({
    todoItems: s => s.items.todo,
    inProgressItems: s => s.items.inProgress,
    doneItems: s => s.items.done
  })
};
</script>
