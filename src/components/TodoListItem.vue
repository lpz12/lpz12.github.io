<template>
    <div class="todo-item" :class="{done:todo_item.completed}">
        <label>
            <input type="checkbox" 
            :checked="todo_item.completed"
            @click="$emit('change-state',$event)"
            />
                {{todo_item.content}}
            <span class="check-button"></span>
        </label>
    </div>
</template>
<script>
    export default {
        name: "TodoListItem",
        props:["todo_item"],
    };
</script>
<style>
    .todo-item {
        background: white;
        padding: 15px;
        border-radius: 8px;
        color: #626262;
    }

    .todo-item label {
        position: relative;
        display: flex;
        align-items: center;
    }

    .todo-item.done label {
        text-decoration: line-through;
        font-style: italic;
    }

    .todo-item label span.check-button {
        position: absolute;
        top: 0;
    }

    .todo-item label span.check-button::before,
    .todo-item label span.check-button::after {
        content: "";
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
    }

    .todo-item label span.check-button::before {
        border: 1px solid #b382f9;
    }

    .todo-item label span.check-button::after {
        transition: 0.4s;
        background: #b282f9;
        transform: translate(1px, 1px) scale(0.8);
        opacity: 0;
    }

    .todo-item input {
        margin-right: 16px;
        opacity: 0;
    }

    .todo-item input:checked+span.check-button::after {
        opacity: 1;
    }
</style>