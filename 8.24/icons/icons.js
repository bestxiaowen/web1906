Vue.component('icon',{
    props:{
        type:{
            type:String,
            required:true
        },
        size:{
            type:String,
            default:'default'
        },
        color:{
            type:String,
            // default:'default'
        }
    },
    data() {
        return {
            // key: value
        }
    },
    template:`
    <div>
        <div>
            <span
                :class="{
                    'iconfont':true,
                    'icon-zhongzuo':type==='zhongzuo',
                    'icon-chexiao':type==='chexiao',
                    'icon-yinyong':type==='yinyong',
                    'icon-qingchugeshi':type==='qingchugeshi',
                    'icon-geshishua':type==='geshishua',


                    'icon-default':size==='default',
                    'icon-large':size==='large',
                    'icon-small':size==='small',
                }"

                :style="{
                    'color':color
                }"
            ></span>
        </div>
    </div>
    `
})