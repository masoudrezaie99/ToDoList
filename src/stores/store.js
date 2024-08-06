import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state:()=>({
        localStorageData : localStorage.getItem("ToDoTasks"),
        tasks:[],
        task:'',
        taskDes:'',
        taskDate:null,
        timeModal:false,
        taskTime:null,
        overlay:false,
        drawer:false,
        menuItems: [
            { text: 'Home', icon: 'mdi-home', link:'/' },
            { text: 'Archive', icon: 'mdi-archive', link:'/archive'},
            
          ],
    }),

    
    getters:{
        computedDate(){
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            const d = new Date(this.taskDate)
            const date = d.getDate()
            const month =  months[d.getMonth()]
            const year = d.getFullYear()
            return year + ' / ' + month + ' / ' + date
        },


        disableBtn(){
            return this.task=='' || this.taskDate==null || this.taskTime==null ? false : true
        },


        sortedTasks(){
            return this.tasks.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
    },



    actions:{
        addTask(){
            var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            this.taskDate.setHours(this.taskTime.split(":")[0])
            this.taskDate.setMinutes(this.taskTime.split(":")[1])
            
            const newTask = {
                title:this.task,
                description:this.taskDes,
                date:this.taskDate,
                isdone:false,
                timeData:`${dayList[new Date(this.taskDate).getDay()]}, ${monthNames[new Date(this.taskDate).getMonth()]} ${new Date(this.taskDate).getDate()}, ${new Date(this.taskDate).getFullYear()} | ${new Date(this.taskDate).getHours()} : ${new Date(this.taskDate).getMinutes()}`
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