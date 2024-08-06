<template>
  <v-card height="100%" min-width="120px" color="blue-grey-lighten-4">


    <template v-for="item in tasks" :key="item.title">
      <v-card v-if="item.isdone==false" :title="item.title" :subtitle="item.timeData" :text="item.description">
      
    </v-card>
</template>

    
  </v-card>



</template>

<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';




export default{
  setup(){
    const taskStore = useTaskStore()
    const {task , tasks , taskDes , taskDate , timeModal, taskTime, timeData} = storeToRefs(taskStore)
    taskStore.updateTasks()

    return{task , tasks , taskDes , taskDate , timeModal, taskTime, timeData}

  },




 
}

</script>


<style>



</style>
