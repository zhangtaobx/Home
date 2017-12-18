<template>

    <div>
        <button @click="fun1()">-</button>
        <span v-text="">{{usering.shu}}</span>
        <button @click="fun2()">+</button>
    </div>

</template>

<script>
    export default {
        props:["usering","index2"],
        methods:{
            fun1(){
                this.$emit("counterplus",this.index2);
            },
            fun2(){
                this.$emit("counteradd",this.index2);
            }
        }

    }
</script>