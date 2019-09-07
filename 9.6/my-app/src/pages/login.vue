<template>
    <div>
        <el-container>
            <el-aside>欢迎登录</el-aside>
            <el-main>
                <!-- <div class="form"> -->
                <el-form>
                    <el-form-item label="账号" label-width="80px">
                        <el-input size="small"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" label-width="80px">
                        <el-input size="small"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" label-width="80px">
                        <el-input size="small"></el-input>
                    </el-form-item>
                    <el-form-item label-width="80px">
                        <el-button size="small" type="primary" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
                <!-- </div> -->
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // key: value
        };
    },
    methods: {
        login() {
            localStorage.setItem('key',true)
            this.$router.push("./home");
        }
    }
};
</script>

<style lang='less' scoped>
.el-container {
    height: 100vh;
    .el-main {
        display: flex;
        align-items: center;
        .el-button {
            // display: block;
            margin: 0 auto !important;
        }
    }
    .el-aside {
        width: 75% !important;
        background-color: aqua;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
    }
}
</style>