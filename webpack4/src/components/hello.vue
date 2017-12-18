
<template>
    <div class="app">
        <h1 align="center">商品列表</h1>
        <table>
            <tr>
                <td>商品名称</td>
                <td>商品单价</td>
                <td>商品数量</td>
                <td>添加至购物车</td>
            </tr>
            <tr v-for="(user,index) in users">
                <td>{{user.name}}</td>
                <td>{{user.danjia}}</td>
                <td>
                    <counter :usering="user" :index2="index" @counterplus="plus" @counteradd="add"></counter>

                    <!--<button @click="user.shu=user.shu?user.shu-1:user.shu">-</button>-->
                    <!--<span v-text="user.shu"></span>-->
                    <!--<button @click="user.shu=user.shu+1">+</button>-->

                </td>
                <td><button @click="tianjia(index)">添加到购物车</button></td>
            </tr>
        </table>




    </div>
</template>

<script>

    import  bus  from '../bus.js'
    import counter from './counter.vue'
    export default {
        components:{counter},
        data: function () {
            return {
                users: [{name: "苹果", danjia: 5, shu: 1},
                    {name: "橘子", danjia: 6, shu: 0},
                    {name: "香蕉", danjia: 7, shu: 0}
                    ]



            }
        },
        methods: {
            tianjia(index) {
                if (this.users[index].shu === 0) {
                    alert("请选择数量");
                    return false;
                }
                var obj = {};
                for (var i in this.users[index]) {
                    obj[i] = this.users[index][i];
                }
                bus.$emit("myevent", obj);
            },
            plus(data){
                if(this.users[data].shu==0){
                    return
                }
                this.users[data].shu--;
            },
            add(data){
                this.users[data].shu++;
            }
        },

        mounted:function () {
//            var self=this;
//            this.$on("counterplus",function (data) {
//                if(self.users[data].shu==0){
//                    return
//                }
//                self.users[data].shu--;
//            });
//            this.$on("counteradd",function (data) {
//                self.users[data].shu++;
//            })


        }


        }

</script>


<style>
    .app {
        width: 1000px;
        margin: auto;
    }

    table {
        width: 800px;
        margin: auto;
    }

    td {
        text-align: center;
        border: 1px solid;
    }

</style>
