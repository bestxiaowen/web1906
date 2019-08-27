Vue.component('i-Switch',{
    props:{
        value:{
            type:Boolean,
            default:true
        },
        size:{
            type:String,
            default:'default'
        },
        disabled:{
            type:Boolean,
            default:false
        },
    },
    data() {
        return {
            ivalue: this.value
        }
    },
    watch: {
        ivalue(n){
            this.$emit('input',n)
        }
    },
    methods: {
        
    },
    template:`
    <div
        :class="{
            'switch':true,
            'switch-large':size==='large',
            'switch-small':size==='small',
            'switch-default':size==='default',
            'switch-on':ivalue,
            'disabled':disabled
        }"
        @click='ivalue=!ivalue'
    >
        <span
            :class="{
                'switch-btn':true
            }"
        ></span>

        <span class='on' v-if='ivalue'>开</span>
        <span class='off' v-if='!ivalue'>关</span>
    </div>
    `
})