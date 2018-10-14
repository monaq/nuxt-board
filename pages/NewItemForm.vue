<template>
    <div class="add-item">
      <b-btn variant="primary" v-b-modal.taskModal>Task 추가하기</b-btn>
      <b-modal id="taskModal"
              ref="modal"
              title="Add Task"
              @ok="handleOk"
              @shown="clearName"
            >
        <form @submit.stop.prevent="submitForm">
            <b-form-select v-model="companySelected" :options="company" class="mb-3" />
            <b-form-select v-if="companySelected" v-model="categorySelected" :options="category[companySelected]" class="mb-3" />
            <b-form-select v-if="categorySelected" v-model="serviceSelected" :options="services[companySelected].categorySelected" class="mb-3" />
            <b-form-input type="text" v-model="itemCoworker" placeholder="함께 작업한 사람이 있으면 적어주세요."></b-form-input>
            <b-form-input type="text" v-model="itemJiraNum" placeholder="Jira Number"></b-form-input>
            <label>기간</label><rangeDate id="" @submit="onDateSelected" @selected="onDateSelected" format="YYYY-MM-DD" compact="false" i18n="EN"></rangeDate>
            <b-form-input type="text" v-model="itemText" placeholder="내용을 적어 주세요"></b-form-input>
        </form>
      </b-modal>

    </div>
</template>

<script>
import { COMPANY, CATEGORY, SERVICE } from '@/components/constant'
import rangeDate from 'vue-rangedate-picker'

export default {
  name: "NewItemForm",
  components: {
    rangeDate
  },
  data() {
    return {
      itemText: '',
      itemCoworker: '',
      itemJiraNum: null,
      selectedDate: {
        start: '',
        end: ''
      },
      company: COMPANY,
      companySelected: '',
      category: CATEGORY,
      categorySelected: null,
      services: SERVICE,
      serviceSelected: null
    };
  },
  methods: {
    onDateSelected: function (daterange) {
      event.preventDefault()
      const dateToYMD = date => {
          const d = date.getDate()
          const m = date.getMonth() + 1
          const y = date.getFullYear()
          return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
      }

      this.selectedDate.start = dateToYMD(new Date(daterange.start))
      this.selectedDate.end = dateToYMD(new Date(daterange.end))
    },
    clearName () {
      this.companySelected = '',
      this.categorySelected = null,
      this.serviceSelected = null,

      this.itemText = '',
      this.itemCoworker = '',
      this.itemJiraNum = null,
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
      const parse = JSON.stringify(this._data)

      this.$store.commit("addItem", {
        text: `${this.itemText} (${this.itemJiraNum} / ${this.selectedDate.start} ~ ${this.selectedDate.end})`,
        data: parse
      });

      this.clearName()
      this.$refs.modal.hide()
    }
  }
};
</script>
<style lang="css" scoped>
  .btn-primary {
    margin: 0.5em 0
  }
</style>
