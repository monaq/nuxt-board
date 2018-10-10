<template>
    <div class="add-item">
      <b-btn v-b-modal.taskModal>Task 추가하기</b-btn>
      <b-modal id="taskModal" 
              ref="modal"
              title="Add Task"
              @ok="handleOk"
              @shown="clearName"
            >
        <form @submit.stop.prevent="submitForm">
            <b-form-input type="text" v-model="itemText" placeholder="추가사항을 적어주세요"></b-form-input>
        </form>
      </b-modal>
      
    </div>
</template>

<script>
export default {
  name: "NewItemForm",
  data() {
    return {
      itemText: ''
    };
  },
  methods: {
    clearName () {
      this.itemText = ''
    },
    handleOk (e) {
      e.preventDefault()
      if (!this.itemText) {
        alert('내용을 적어 주세요')
      } else {
        this.submitForm()
      }
    },
    submitForm() {
      this.$store.commit("addItem", {
        text: this.itemText
      });

      this.clearName()
      this.$refs.modal.hide()
    }
  }
};
</script>
