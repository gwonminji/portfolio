<template>
    <!-- <div class="card-wrap" data-aos="zoom-in" data-aos-duration="500" data-aos-anchor-placement="center-center"> -->
    <div class="card-wrap">
        <div class="card" v-for="project in projects" :key="project.id" data-aos="zoom-in" data-aos-duration="500" data-aos-anchor-placement="center-center">
        <!-- <div class="card" v-for="project in projects" :key="project.id"> -->
            <div class="img-box">
                <img :src="project.imageUrl" :alt="project.name">
                <a :href="project.url" :title="project.hover" target="_blank" class="link">
                    <span>{{ project.hover }}</span>
                </a>
            </div>
            <div class="text-box">
                <h4 class="client">{{ project.client }}</h4>
                <h5 class="proj-name">{{ project.name }}</h5>
                <div class="tag-box">
                    <span class="tag" v-for="(tag, index) in project.tags" :key="index">{{tag}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects:[
                {id:1, client:"비너스이숍", name:"모바일앱 리뉴얼", imageUrl:require("@/assets/images/img_proj20.png"), tags:["#HybridApp", "#Webview"], hover:"VIEW SOURCE", url:"https://github.com/gwonminji/mobile-eshop"},
                {id:2, client:"삼성증권", name:"회사소개 홈페이지 리뉴얼", imageUrl:require("@/assets/images/img_proj17.png"), tags:["#ResponsiveWeb", "#웹접근성 인증마크"], hover:"GO SITE", url:"https://www.samsungsecurities.co.kr/kor/main.do"},
            ]
        }
    },
}
</script>