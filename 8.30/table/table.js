Vue.component('i-Table',{
    props:{
        column:{
            type:Array,
            required:true
        },
        data:{
            type:Array,
        }
    },
    data() {
        return {
            icolumn: this.column,
            idata:this.data
        }
    },
    mounted () {
        console.log(this.$slots)  
    },
    template:`
    <div>
        <table class='table'>
            <tr>
                <th
                    v-for='item in column'
                >
                    {{item}}
                </th>
                <th>操作</th>
            </tr>
            <tr
                v-for='(item,index) in data'
            >
                <td
                    v-for='msg in column'
                >
                    {{item[msg]}}
                </td>
                <td>
                    <slot name='btn' :data='[item,index]'></slot>
                </td>
            </tr>
        </table>
    </div>
    `

    // <div>
    //     <table class='table'>
    //         <tr>
    //             <th v-for='item in column'>{{item.title}}</th>
    //         </tr>
    //         <tbody>
    //             <tr v-for='item in data'>
    //                 <td v-for='col in column'>{{item[col.key]}}</td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
})