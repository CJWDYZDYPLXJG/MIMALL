<template>
    <div class="footer">
        <div class="footer-log">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp" target="_blank">主页主页主页</a>
            <span>|</span>
            <a href="https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp" target="_blank">主页主页主页</a>
            <span>|</span>
            <a href="https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp" target="_blank">主页主页主页</a>
            <span>|</span>
            <a href="https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp" target="_blank">主页主页主页</a>
            <span>|</span>
            <a href="https://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp" target="_blank">主页主页主页</a>
        </div>
        <div class="copyright">
            ©版权<span class="domain">mi.com</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'nav-footer'
    }
</script>
<style lang="scss" scoped>
    .footer {
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;

        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;

            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }

        .footer-link {
            a {
                color: #999999;
                display: inline-block;
            }

            span {
                margin: 0 10px;
            }

            margin-bottom:13px;
        }

        .copyright {
            .domain {
                color: #FF6600;
            }
        }
    }
</style>