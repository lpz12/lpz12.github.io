import { computed,ref } from "vue";
export default function useFilteredTodos(todos){
    // 需要使用计算属性，也需要从 vue 中导出引入
    const filter=ref("all");
    const filteredTodos=computed(()=>{  
        switch(filter.value){
          case "done":
            return todos.value.filter((todo)=>todo.completed);
          case "todo":
            return todos.value.filter((todo)=>!todo.completed); 
          default:
            return todos.value; 
        }
    });
    return{
        filter,
        filteredTodos
    };
}