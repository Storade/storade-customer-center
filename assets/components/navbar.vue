<template>
    <div class="navbar">
        <el-row type="flex" align="middle">
            <el-col :span="3">
                <a href="#" class="logo">
                    <img src="images/logo.svg" alt="logo">
                </a>
            </el-col>
            <el-col :span="21">
                <el-row>
                    <el-col :span="12">
                        <el-menu
                                :default-active="activeIndex2"
                                class="el-menu"
                                mode="horizontal">
                            <el-submenu index="1">
                                <template slot="title">Services</template>
                                <el-menu-item index="1-1">Ecommerce</el-menu-item>
                                <el-menu-item index="1-2">Integrations</el-menu-item>
                            </el-submenu>

                        </el-menu>
                    </el-col>
                    <el-col :span="12">
                        <el-menu
                                :default-active="activeIndex2"
                                class="el-menu el-menu-right"
                                mode="horizontal">
                            <el-menu-item index="1">Help Center</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">Demo Account</template>
                                <el-menu-item index="2-1">Account Settings</el-menu-item>
                                <el-menu-item index="2-2">Billing</el-menu-item>
                                <el-menu-item index="2-3">Logout</el-menu-item>
                            </el-submenu>

                        </el-menu>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss">
    @import "./assets/styles/scss/_variables.scss";

    .navbar {
        background: $color_primary_dark;
        color: $color-white;

        .logo {
            padding-left: 25px;
            display: block;
        }

        .el-menu {
            background: inherit;
            border-bottom: none;
            &-item{
                color:$color_white;
                font-weight: bold;
                &:hover{
                    background-color: inherit !important;
                    color:$color_white !important;
                }
            }
            .el-submenu {
                .el-submenu__title {
                    color: $color_white;
                    font-weight: bold;
                    &:hover{
                        background-color: inherit ;
                    }
                }
                .el-submenu__icon-arrow{
                    color:$color_white;
                    font-weight: bold;
                }
            }
        }
        .el-menu-right{
            display: flex;
            justify-content: flex-end;
            padding-right: 20px;
        }

    }

</style>
<script></script>