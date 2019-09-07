<template>
    <div>
        <div class="body">
            <div
                :class="{
                        wrap:true,
                        
                    }"
                :style="{
                        height:iwidth+'px',
                        borderRadius:iwidth/2+'px'
                    }"
            >
                <div
                    :class="{
                            progress:true,
                            normal:status==='normal',
                            active:status==='active',
                            wrong:status==='wrong',
                            success:status==='success',
                        }"
                    :style="{
                            width:4*percent+'px',
                            borderRadius:iwidth/2+'px'
                        }"
                >
                    <transition
                        v-if="status==='active'"
                        tag="div"
                        enter-active-class="enter"
                        @after-enter="cancelEnter"
                    >
                        <div
                            v-show="show"
                            :style="{
                                    borderRadius:iwidth/2+'px',
                                    height:'inherit'
                                }"
                        ></div>
                    </transition>
                </div>
            </div>
            <span v-if="(status==='normal'||status==='active')&&percent!=100">{{percent}}%</span>
            <span
                v-if="status==='wrong'"
                class="iconfont icon-error"
                :style="{
                        color:'#ed4014',
                        fontSize:width+'px'
                    }"
            ></span>
            <span
                v-if="status==='success'||percent===100"
                class="iconfont icon-success"
                :style="{
                        color:'#19be6b',
                        fontSize:width+'px'
                    }"
            ></span>
        </div>
    </div>
</template>

<script>
import './icons.css'
export default {
    props: {
        width: {
            type: Number,
            default: 10
        },
        percent: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            default: "normal"
        }
    },
    data() {
        return {
            iwidth: this.width,
            show: false
        };
    },
    created() {
        setInterval(() => {
            this.show = !this.show;
        }, 2000);
    },
    methods: {
        cancelEnter() {
            this.show = false;
        }
    }
};
</script>

<style>
.body {
    display: flex;
    align-items: center;
}

.wrap {
    width: 400px;
    background-color: #f3f3f3;
    display: inline-block;
    margin: 10px 8px;
}

.progress {
    height: inherit;
    background-color: #2d8cf0;
}

.normal {
}

.active {
    background-color: #2d8cf0;
}

.wrong {
    background-color: #ed4014;
}

.success {
    background-color: #19be6b;
}

@keyframes progress {
    from {
        width: 0;
        opacity: 1;
        background-color: white;
    }
    to {
        background-color: white;
        width: 100%;
        opacity: 0;
    }
}

.enter {
    animation: progress 0.5s linear;
}
</style>