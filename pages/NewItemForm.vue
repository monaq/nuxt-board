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
            <!-- <b-form-select v-model="companySelected" :options="company" class="mb-3" />  
            <b-form-select v-if="companySelected" v-model="categorySelected" :options="category[companySelected]" class="mb-3" />  
            <b-form-select v-if="categorySelected" v-model="serviceSelected" :options="services[companySelected].categorySelected" class="mb-3" />   -->
            <b-form-input type="text" v-model="itemCoworker" placeholder="함께 작업한 사람이 있으면 적어주세요."></b-form-input>
            <b-form-input type="text" v-model="itemJiraNum" placeholder="Jira Number"></b-form-input>
            <b-form-input type="text" v-model="itemDueDate" placeholder="작업기간"></b-form-input>
            <b-form-input type="text" v-model="itemText" placeholder="내용을 적어 주세요"></b-form-input>
        </form>
      </b-modal>
      
    </div>
</template>

<script>
import { COMPANY, CATEGORY, SERVICE } from '@/components/constant'

export default {
  name: "NewItemForm",
  mounted() {
    console.log(this.services['kakao'].multi)
  },
  data() {
    return {
      itemText: '',
      itemCoworker: '',
      itemJiraNum: null,
      itemDueDate: null,

      company: COMPANY,
      companySelected: '',
      category: CATEGORY,
      categorySelected: null,
      services: SERVICE,
      serviceSelected: null
    };
  },
  methods: {
    clearName () {
      this.companySelected = '',
      this.categorySelected = null,
      this.serviceSelected = null,

      this.itemText = '',
      this.itemCoworker = '',
      this.itemJiraNum = null,
      this.itemDueDate = null,
      this.itemPercent = ''
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
        text: `${this.itemText} (${this.itemJiraNum} / ${this.itemDueDate} `
      });

      this.clearName()
      this.$refs.modal.hide()
    }
  }
};
</script>
