<template>
  <a-steps :current="1">
    <a-step v-for="item in stepsList" :key="item.id" :title="item.title">
      <!-- <span slot="title">Finished</span> -->
      <template slot="title">
        Finished
      </template>
    </a-step>
    <a-step title="In Progress"/>
    <a-step title="Waiting"  />
  </a-steps>
</template>
