<template>
    <template v-for="item in tasks" :key="item.title">
    <v-card v-if="item.isdone==false" :title="item.title" :subtitle="item.timeData" :text="item.description">
      <v-card-actions>
        <v-btn @click="item.isdone=true;">done</v-btn>
      </v-card-actions>
    </v-card>
</template>


</template>



<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';





export default{
    name:'listItem-cp',

  setup(){
    const taskStore = useTaskStore()
    const {task , tasks , taskDes , taskDate , timeModal, taskTime, timeData} = storeToRefs(taskStore)
    taskStore.updateTasks()
   
    // watch local storages changes
  window.addEventListener("storage", (event) => {
        if (event.key === "ToDoTasks") {
          taskStore.updateTasks()
        }
        
      });



      // watch tasks array changes
      taskStore.$subscribe((mutation, state) => {

  mutation.type 

  mutation.storeId 

  mutation.payload 

  localStorage.ToDoTasks = JSON.stringify(state.tasks)
})



 



    return{task , tasks , taskDes , taskDate , timeModal, taskTime, timeData}

  },


 
}

</script>



<style scoped>

</style>