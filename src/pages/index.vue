<template>
    <div>
        <div class="container">
            <div class="swiper-box">
                <swiper >

                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="prodcut-box"></div>
        </div>
        <service-bar>     
        </service-bar>
    </div>

</template>
<script>
    import ServiceBar from './../components/ServiceBar'
    import { swiper , swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'index',
        components: {
            swiper,
            swiperSlide,
            ServiceBar
        }
    }
</script>