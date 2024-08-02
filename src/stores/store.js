import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state:()=>({
        localStorageData : localStorage.getItem("ToDoTasks"),
        tasks:[],
        task:'',
        taskDes:'',
        taskDate:null,
        timeModal:false,
        newTaskDate : null,
        taskTime:null,
        overlay:false
    }),

    
    getters:{
        computedDate(){
            const d = new Date(this.taskDate)
            const date = d.getDate()
            const month =  parseInt(d.getMonth()) + 1
            const year = d.getFullYear()
            return year + '-' + month + '-' + date
        },


        disableBtn(){
            return this.task=='' || this.taskDes=='' || this.taskDate==null || this.taskTime==null ? false : true
        }
    },



    actions:{
        addTask(){
            const newTask = {
                title:this.task,
                description:this.taskDes,
                date:this.computedDate,
                time:this.taskTime,
            }

            this.tasks.push(newTask)
            localStorage.ToDoTasks = JSON.stringify(this.tasks)
            
            this.overlay=false
            this.task=''
            this.taskDes=''
            this.taskDate=null
            this.taskTime=null

        },



        updateTasks(){
            if (localStorage.ToDoTasks)
              this.tasks = JSON.parse(localStorage.ToDoTasks);
        },
    }
})