<template>
  <a-steps :current="1">
    <a-step>
      <!-- <span slot="title">Finished</span> -->
      <template slot="title">
        Finished
      </template>
    </a-step>
    <a-step title="In Progress" sub-title="Left 00:00:08" />
    <a-step title="Waiting"  />
  </a-steps>
</template>
