
<!--<template>-->
    <!--<div class="app">-->
        <!--<h1 align="center">购物车</h1>-->
        <!--<table>-->
            <!--<tr>-->
                <!--<td>商品名称</td>-->
                <!--<td>商品单价</td>-->
                <!--<td>商品数量</td>-->
                <!--<td>商品删除</td>-->
            <!--</tr>-->
            <!--<tr v-for="(ue,index1) in uer">-->
                <!--<td>{{ue.name}}</td>-->
                <!--<td>{{ue.danjia}}</td>-->
                <!--<td>-->
                    <!--&lt;!&ndash;<counter :usering="ue" :index="index1"></counter>&ndash;&gt;-->
                    <!--<button @click="ue.shu=ue.shu?ue.shu-1:ue.shu">-</button>-->
                    <!--<span class="num1" v-text="ue.shu"></span>-->
                    <!--<button @click="ue.shu=ue.shu+1">+</button>-->
                <!--</td>-->
                <!--<td>-->
                    <!--<button @click="shanchu(index1)">删除</button>-->

                <!--</td>-->
            <!--</tr>-->
            <!--<tr>-->
                <!--<td colspan="5"><button @click="jiesuan()" style="width: 20%;height: 22px;">结算</button></td>-->
            <!--</tr>-->
        <!--</table>-->

    <!--</div>-->

<!--</template>-->

<!--<script>-->
<!--//    import counter from 'counter.vue'-->
    <!--import  {bus}  from '../main.js'-->
    <!--export default {-->
<!--//        props:["usering","index"],-->
        <!--components:{bus},-->
        <!--data: function () {-->
            <!--return {-->
                <!--uer: []-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--shanchu(index1) {-->
                <!--this.uer.splice(index1, 1);-->
            <!--},-->
            <!--jiesuan() {-->
                <!--var jieguo = 0;-->
                <!--for (var c = 0; c < this.uer.length; c++) {   //c：表示uer的下标-->
                    <!--jieguo = jieguo + Number(this.uer[c].danjia) * Number(this.uer[c].shu);-->
                <!--}-->
                <!--alert("合计" + jieguo + "元");-->
            <!--}-->
        <!--},-->
        <!--mounted: function () {-->
            <!--var self = this;-->
            <!--this.$on("myevent", function (data) {-->

                <!--for (var a = 0; a < self.uer.length; a++) {-->
                    <!--if (data.name === self.uer[a].name) {-->
                        <!--self.uer[a].shu = Number(self.uer[a].shu) + Number(data.shu);-->
                        <!--return;-->
                    <!--}-->
                <!--}-->

                <!--this.uer.push(data);-->

            <!--})-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style>-->
    <!--table {-->
        <!--width: 800px;-->
        <!--margin: auto;-->
    <!--}-->

    <!--td {-->
        <!--text-align: center;-->
        <!--border: 1px solid;-->
    <!--}-->

<!--</style>-->
