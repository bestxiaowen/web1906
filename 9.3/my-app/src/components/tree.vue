<template>
    <div>
        <ul>
            <li
                v-for="(item,index) in list"
                :key="index"
                @click.stop="item.childShow=!item.childShow"
            >
                <div>
                    <div>
                        <span v-if="item.id===1" class="iconfont icon-Floder icons"></span>
                        <span v-if="item.id!=1" class="iconfont icon-file icons"></span>
                        <div class="span">{{item.name}}</div>
                    </div>
                    <div v-if="item.id===1">
                        <button @click.stop="add(item,index)" class="parentBtn">+</button>
                    </div>
                    <div v-if="item.id!=1">
                        <button @click.stop="add(item,index)" class="childAdd">+</button>
                        <button @click.stop="del(item,index,list)" class="childDel">-</button>
                    </div>
                </div>
                <Tree :data="item.children" v-if="item.childShow" />
            </li>
        </ul>
    </div>
</template>

<script>
import '../font/iconfont.css'
export default {
    name:'Tree',
    props: {
        data: {
            type: Array
        }
    },
    data() {
        return {
            list: this.data
        };
    },
    created() {},
    methods: {
        add(item) {
            if (!item.children) {
                this.$set(item, "children", []);
                item.children.push({
                    name: "校长",
                    childShow: false,
                    id: 6
                });
                item.childShow = true;
            } else {
                item.children.push({
                    name: "小张",
                    childShow: false,
                    id: 6
                });
            }
            console.log(item)
        },
        del(item, i, list) {
            console.log(item, i, list);
            list.splice(i, 1);
            console.log(item, i, list);
        }
    }
};
</script>

<style>
#app {
    width: 200px;
}

ul {
    list-style: none;
    padding: 0;
    width: 100%;
    /* overflow: hidden; */
}
ul li {
    padding: 3px 0 3px 8px;
    box-sizing: border-box;
}

li > div {
    display: flex;
    justify-content: space-between;
}

button {
    cursor: pointer;
    padding: 1px 6px;
}

.icons {
    padding-right: 5px;
}

.span {
    user-select: none;
    display: inline;
}

/* li{
    display: flex;
    justify-content: space-between;
} */

.parentBtn {
    width: 48px;
    height: 20px;
    background-color: #2d8cf0;
    border-radius: 4px;
    border: 1px solid #dcdee2;
}

.childAdd {
    width: 22px;
    height: 18px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
}

.childDel {
    width: 22px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid #dcdee2;
}
</style>