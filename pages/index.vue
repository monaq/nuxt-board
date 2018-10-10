<template>
  <div id="Kanban" class="container">
    <h2>FT Kanban Board</h2>
    <p>FT 개발팀의 주간보고 관리 시스템입니다.</p>
    <b-alert show variant="success">
      <h4 class="alert-heading">사용전에</h4>
      <ul>
        <li>모든 task는 사용자의 localstorage에 저장되므로 개별적으로 관리 하시기 바랍니다.</li>
        <li>지난주 task를 복사 붙여넣기 하시면 이전 히스토리를 덮어씁니다. >바로가기</li>
      </ul>
    </b-alert>
    <div id="weeklyResult">
      <h4>이번주 주간보고</h4>
    </div>
  </div>
</template>

<script>

export default {
  name: "Kanban",
  computed: {
  }
  // props: {
  //   msg: String
  // }
};
</script>

<style scoped>
</style>
