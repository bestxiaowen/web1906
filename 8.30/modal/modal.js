Vue.component('modal', {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '标题'
        }
    },
    data() {
        return {
            show: this.value
        }
    },
    watch:{
        value(n){
            this.show=n
            console.log(n)
            this.$emit('input',n)
        },
        show(n){
            this.$emit('input',n)
        }
    },
    mounted() {
        console.log(this.$slots)
    },
    methods: {
        toget(e) {
            // console.log(e.target.classList[0])
            // console.log(e.target.classList.value==='wrap')
            // console.log(typeof e.target.classList)
            if (e.target.classList.value === 'wrap') {
                console.log(111)
                this.show = !this.show
            }
        },
        close(){
            this.show = !this.show
        },
        cancle(){
            this.$emit('cancle')
        },
        sure(){
            this.$emit('sure')
        }
    },
    template: `
    <transition
        enter-active-class="rotateIn"
        leave-active-class="rotateOut"
    >
        <div v-if='show' class='wrap' @click='toget($event)'>
            <div class='modal'>
                <div class='title'>
                    <b>{{title}}</b>
                    <span @click='close'>×</span>
                </div>
                <div class='contain'>
                    <slot></slot>
                </div>
                <div class='footer'>
                    <div>
                        <button class='cancle' @click='cancle'>取消</button>
                        <button class='sure' @click='sure'>确定</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    
    `
})