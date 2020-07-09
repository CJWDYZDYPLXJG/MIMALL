<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">登陆</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMI</span>
                        <div class="children">

                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript" class=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'nav-header'
    }
</script>
<style lang="scss">
    @import '.././assets/scss/base.scss';
    @import '.././assets/scss/mixin.scss';
    @import '.././assets/scss/config.scss';

    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;

            .container {
                @include flex();
            }

            a {
                display: inline-block;
                color: #B0B0B0;
                margin-right: 17px;
            }

            .my-cart {
                width: 110px;
                background-color: #FF6600;
                text-align: center;
                color: #ffffff;

                .icon-cart {
                    @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
                    margin-right: 4px;
                }
            }
        }

        .nav-header {
            .container {
                height: 112px;
                @include flex();
                position: relative;

                .header-logo {
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;

                    a {
                        display: inline-block;
                        width: 110px;
                        height: 55px;

                        &:before {
                            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
                            content: '';
                            transition: margin .2s;
                        }

                        &:after {
                            @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);
                            content: '';
                        }

                        &:hover:before {
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }

                }

                .header-menu {
                    display: inline-block;
                    padding-left: 209px;
                    width: 643px;

                    .item-menu {
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;

                        span {
                            cursor: pointer;
                        }

                        &:hover {
                            color: $colorA;

                            .children {
                                height: 220px;
                            }
                        }

                        .children {
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);

                            .product {
                                float: left;
                                width: 16.6%;
                                img{
                                    width: auto;
                                    height: 111px;
                                }
                            }
                        }
                    }
                }

                .header-search {
                    width: 319px;

                    .wrapper {
                        height: 50px;
                        border: 1px solid #e0e0e0;
                        display: flex;
                        align-items: center;

                        input {
                            border: none;
                            border-right: 1px solid #e0e0e0;
                            box-sizing: border-box;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;

                        }

                        a {
                            @include bgImg(18px, 18px, '/imgs/icon-search.png');
                            margin-left: 17px;
                        }
                    }
                }
            }
        }




    }
</style>