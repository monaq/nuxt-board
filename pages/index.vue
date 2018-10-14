<template>
  <div id="Kanban" class="container">
    <h2>FT Kanban Board</h2>
    <p>FT 개발팀의 주간보고 관리 시스템입니다.</p>
    <p>주간보고 (10.01 ~ 10.05)</p>
<p>서비스 구분 : <a href="https://docs.google.com/spreadsheets/d/1LQsN4Cu4MhbyyBuJi9b39m7_rO2a8uYiRXcx1n64hOI/edit#gid=1352991083">GOOGLE DOCS</a></p>

[기한]<br>
10.05 점심전까지<br><br>
<ul>
  <li>내부 업무는 Issue로 빼주세요. (전략목표, 가이드등등)</li>
  <li>투입리소스도 함께 기록해 주시고 정확히 적어주세요. > <a href="https://docs.google.com/spreadsheets/d/1u0a3fJlN98IeOEZO06nx1eVeiT4AM3GMzGGok1FBsjc/edit#gid=206502081">주간 투입 리소스</a></li>
  <li>회의관련된 항목은 회의내용 요약 or 회의록 링크를 적어주세요.</li>
  <li>주간업무에 기록되는 업무는 jira에 다 등록되어 있어야 합니다.</li>
</ul>

주간보고 작성법 <a href="http://wiki.daumkakao.com/pages/viewpage.action?pageId=441695319">Wiki</a>
    <b-alert show variant="success">
      <h4 class="alert-heading">사용전에</h4>
      <ul>
        <li>모든 task는 사용자의 쿠키에 저장되므로 개별적으로 관리 하시기 바랍니다.</li>
        <li>지난주 task를 복사 붙여넣기 하시면 이전 히스토리를 덮어씁니다. >2차 오픈 개봉박두.</li>
      </ul>
    </b-alert>
    <div id="weeklyResult">
      <h4>이번주 주간보고</h4>
      <br>
      <h5>------issue</h5>

      <h5>------done</h5>
      <p v-for="(item,index) in done" v-bind:key="index">{{ item.text }} </p>
      <h5>------doing</h5>
      <p v-for="(item,index) in doing" v-bind:key="index">{{ item.text }} </p>
      <h5>------done</h5>
      <p v-for="(item,index) in todo"  v-bind:key="index">{{ item.text }} </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Kanban",
  props: ['temp'],
  data() { return {
    prevItems: {},
    doing: {},
    done: {},
    todo: {},
    issue: ''
  }},
  mounted() {
    if(this.$store.state.temp) {
      this.prevItems = JSON.parse(this.$store.state.temp)

      this.doing =this.prevItems.doing
      this.todo =this.prevItems.todo
      this.done =this.prevItems.done
    }
  },
  computed: {

  }
  // props: {
  //   msg: String
  // }
};
</script>

<style scoped>
  h2 {
    margin: 0.5em 0
  }
</style>
