<template>
    <div>
        <transition enter-active-class="rotateIn" leave-active-class="rotateOut">
            <div v-if="show" class="wrap" @click="toget($event)">
                <div class="modal">
                    <div class="title">
                        <b>{{title}}</b>
                        <span @click="close">×</span>
                    </div>
                    <div class="contain">
                        <slot></slot>
                    </div>
                    <div class="footer">
                        <div>
                            <button class="cancle" @click="cancle">取消</button>
                            <button class="sure" @click="sure">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "标题"
        }
    },
    data() {
        return {
            show: this.value
        };
    },
    watch: {
        value(n) {
            this.show = n;
            console.log(n);
            this.$emit("input", n);
        },
        show(n) {
            this.$emit("input", n);
        }
    },
    mounted() {
        console.log(this.$slots);
    },
    methods: {
        toget(e) {
            // console.log(e.target.classList[0])
            // console.log(e.target.classList.value==='wrap')
            // console.log(typeof e.target.classList)
            if (e.target.classList.value === "wrap") {
                console.log(111);
                this.show = !this.show;
            }
        },
        close() {
            this.show = !this.show;
        },
        cancle() {
            this.show = !this.show;
            this.$emit("cancle");
        },
        sure() {
            this.show = !this.show;
            this.$emit("sure");
        }
    }
};
</script>

<style scoped>
#app {
    position: relative;
}

.wrap {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
}

.wrap > .modal {
    width: 500px;
    /* height: 200px; */
    background-color: white;
    margin: 200px auto;
    border-radius: 10px;
}

.title {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e8eaec;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    align-items: center;
    box-sizing: border-box;
}

.title > span {
    cursor: pointer;
}

.contain {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.footer {
    width: 100%;
    height: 60px;
    border-top: 1px solid #e8eaec;
    display: flex;
    justify-content: flex-end;
}
.footer > div {
    display: flex;
    align-items: center;
}

.footer > div > button {
    /* width: 28px; */
    /* height: 22px; */
    padding: 6px 15px;
    margin: 0 6px;
    border: none;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
}

.footer > div > .sure:hover {
    background-color: rgba(45, 140, 240);
}

.footer > div > .cancle:hover {
    color: #2d8cf0;
}

/* 45, 140, 240 */
.cancle {
    background-color: white;
    color: black;
}

.sure {
    background-color: #2d8cf0;
    color: white;
}

@keyframes rotateIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes rotateOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.rotateIn {
    animation: rotateIn linear 0.3s;
}

.rotateOut {
    animation: rotateOut linear 0.3s;
}
</style>