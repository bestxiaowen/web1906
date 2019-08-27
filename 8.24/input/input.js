Vue.component('I-Input',{
    props:{
        type:{
            type:String,
            default:'text'
        },
        size:{
            type:String,
            default:'default'
        },
        placeholder:{
            type:String,
            default:''
        },
        value:{
            type:String,
            default:''
        },
        clearable:Boolean
    },
    data() {
        return {
            ivalue: this.value
        }
    },
    watch: {
        value(n){
            console.log(n)
            this.ivalue=n
            console.log(this.ivalue)
        },
        Ivalue(n){
            console.log(n)
            this.$emit('input',n)
        }
    },
    created() {
        console.log(this.value)
        console.log(typeof this.value)
        this.ivalue=this.value
        console.log(this.ivalue)
    },
    data() {
        return {
            // key: value
        }
    },
    methods: {
        clear(){
            this.ivalue=''
            console.log(111)
        }
    },
    template:`
    <div>
        <input 
            v-model='ivalue'
            :type='type' 
            :class="{
                'input':true,
                'input-large':size==='large',
                'input-small':size==='small',
                'input-default':size==='default'
            }"
            :placeholder='placeholder'
        >
        </input>
        <div
            @click='clear'
            :class="{
                'div':true,
                'show':clearable,
                'icon-large':size==='large',
                'icon-small':size==='small',
                'icon-default':size==='default'
            }"
        ><span class="iconfont icon-geshishua"></span></div>
        <span>{{value}}</span>
    </div>
    `
})