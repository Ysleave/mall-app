<template>
  <a-steps :current="1">
    <a-step v-for="item in stepsList" :key="item.id" :title="item.title"></a-step>
  </a-steps>
</template>
<script>
export default{
    props:['stepsList'],
    data(){
      return{

      }
    }
}
</script>
