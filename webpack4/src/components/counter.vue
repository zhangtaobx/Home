<template>

    <div>
        <button @click="fun1(index)">-</button>
        <span v-text="">{{usering[index].shu}}</span>
        <button @click="fun2(index)">+</button>
    </div>

</template>

<script>

    export default {
        methods:{
            fun1(data){
                this.$emit("counterplus",data);
            },
            fun2(data){
                this.$emit("counteradd",data);
            }
        }

    }
</script>