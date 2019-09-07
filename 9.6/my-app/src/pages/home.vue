<template>
    <div>
        <el-container>
            <el-aside>
                <div class="logo">logo</div>
                <el-menu
                    background-color="#545c64"
                    text-color="#fff"
                    default-active="1"
                    active-text-color="#ffd04b"
                    router
                >
                    <el-menu-item index="/home">
                        <span>首页</span>
                    </el-menu-item>
                    <el-menu-item index="/home/users">
                        <span>用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="/home/msg">
                        <span>信息管理</span>
                    </el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">
                            <span>系统管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>头部</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {};
</script>


<style lang='less' scoped>
.el-container {
    height: 100vh;
    .el-aside {
        width: 240px !important;
        background-color: #545c64;
        .logo {
            width: 100%;
            height: 80px;
            background-color: white;
        }
    }
    .el-container {
        .el-header {
            height: 80px !important;
            background-color: red;
        }
    }
}
</style>