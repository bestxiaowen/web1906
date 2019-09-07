<template>
    <div id="app">
        <p>开关组件</p>
        <iSwitch v-model="value" size="large" disabled />
        <iSwitch v-model="value" />
        <iSwitch v-model="value" size="small" />
        <p>树状组件</p>
        <Tree :data="list" />
        <p>进度条</p>
        <iProgress :width="width" :percent="percent" :status="status" />
        <iProgress :width="10" :percent="30" status="active" />
        <iProgress :width="10" :percent="50" status="wrong" />
        <iProgress :width="10" :percent="80" status="success" />
        <iProgress :width="10" :percent="100" status="active" />
        <p>模态框</p>
        <button @click="modal=true">显示模态框</button>
        <modal v-model="modal" title="这是标题">
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
        </modal>
        <p>滑块</p>
        <swiper v-model="num" />
        <input v-model="num" />
        {{num}}
    </div>
</template>

<script>
import iSwitch from "./components/switch";
import Tree from "./components/tree";
import iProgress from "./components/progress";
import modal from "./components/modal";
import swiper from "./components/swiper";
export default {
    name: "app",
    data() {
        return {
            value: true,
            list: [
                {
                    name: "parent",
                    id: 1,
                    childShow: true,
                    children: [
                        {
                            name: "child",
                            id: 2,
                            childShow: false
                        },
                        {
                            name: "child",
                            id: 2,
                            childShow: false
                        },
                        {
                            name: "child",
                            id: 2,
                            childShow: false
                        }
                    ]
                },
                {
                    name: "parent",
                    id: 1,
                    childShow: true,
                    children: [
                        {
                            name: "child",
                            id: 2,
                            childShow: false,
                            children: [
                                {
                                    name: "child",
                                    id: 3,
                                    childShow: false
                                },
                                {
                                    name: "child",
                                    id: 3,
                                    childShow: false
                                }
                            ]
                        },
                        {
                            name: "child",
                            id: 2,
                            childShow: false
                        }
                    ]
                },
                {
                    name: "parent",
                    id: 1,
                    childShow: true,
                    children: [
                        {
                            name: "child",
                            id: 2,
                            childShow: false
                        }
                    ]
                }
            ],
            percent: 10, // 百分比
            status: "normal", //  active,wrong,success  样式
            width: 10, //进度条的线宽，单位 px
            modal: false, //模态框显示状态
            num: 10
        };
    },
    components: {
        iSwitch,
        Tree,
        iProgress,
        modal,
        swiper
    },
    watch: {
        num(n) {
            if (n > 100) {
                n = 100;
            } else if (n < 0) {
                n = 0;
                console.log(1)
            }
        }
    }
};
</script>

<style>
</style>
