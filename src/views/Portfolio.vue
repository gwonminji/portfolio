<template>
  <main class="sub">
    <!-- visual -->
    <section class="visual">
      <div class="bg"></div>
      <div class="inner">
        <div class="text-box">
          <h2 class="visual-title title1" data-aos="fade-right" data-aos-duration="800">{{ visualText1 }}</h2>
          <h2 class="visual-title title2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">{{ visualText2 }}</h2>
          <h2 class="visual-title title3" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">{{ visualText3 }}</h2>
        </div>
      </div>
    </section>
    <!-- //visual -->

    <!-- portfolio -->
    <section class="portfolio">
      <div class="inner">
        <h3 class="title" data-aos="fade-right" data-aos-duration="500">더 많은 저의 작업물을 살펴보세요.</h3>
        <div class="portfolio-wrap">
          <div class="btn-filter-box" data-aos="flip-up" data-aos-duration="700">
            <button v-for="(val, key) in option.getFilterData" :key="val.key" class="btn-filter" :class="[key===filterOption? 'is-checked' : '']" @click="filter(key)" :title="key">#{{key}}</button>
          </div>
          <isotope class="item-wrap" ref="cpt" :item-selector="'item-box'" :list="projects" :options='option' @filter="filterOption=arguments[0]" v-images-loaded:on.progress="layout" data-aos="zoom-in-up" data-aos-duration="1500">
            <div v-for="proj in projects" :class='[proj.category]' :key="proj.id">
              <div class="img-box">
                <img :src=proj.imageUrl :alt=proj.name>
              </div>
              <div class="txt-box">
                <p class="client">{{proj.client}}</p>
                <p class="name">{{proj.name}}</p>
                <p class="tags"><span v-for="(tag, index) in proj.tags" :key="index">{{tag}}</span></p>
              </div>
            </div>
          </isotope>
        </div>
      </div>
    </section>
    <!-- //portfolio -->
  </main>
</template>
<script>
import isotope from 'vueisotope'
import imagesLoaded from 'vue-images-loaded'

export default {
  components:{
    isotope
  },
  directives: {
      imagesLoaded
  },
  data() {
    return {
      visualText1: "WANT",
      visualText2: "TO SEE",
      visualText3: "MORE?",
      projects:[
          {id:1, client:"삼성카드", name:"S-EDTS 시스템 고도화", imageUrl:require("@/assets/images/img_proj19.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:2, client:"교보생명", name:"GreenT시스템 고도화", imageUrl:require("@/assets/images/img_proj18.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:3, client:"SKT", name:"CDTS 시스템 고도화", imageUrl:require("@/assets/images/img_proj16.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:4, client:"삼성증권", name:"회의실예약 시스템 구축", imageUrl:require("@/assets/images/img_proj15.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:5, client:"삼성증권", name:"CreaTV 사이트 리뉴얼", imageUrl:require("@/assets/images/img_proj14.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:6, client:"라이나생명", name:"PIOMS 리뉴얼", imageUrl:require("@/assets/images/img_proj13.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:7, client:"일진", name:"전자전표 솔루션 구축", imageUrl:require("@/assets/images/img_proj12.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:8, client:"삼성증권", name:"행복마루 커뮤니티 리뉴얼", imageUrl:require("@/assets/images/img_proj11.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:9, client:"한국금융IT", name:"한국가상화폐거래소 KOVEX 홍보 사이트 구축", imageUrl:require("@/assets/images/img_proj10.png"), tags:["#PC", "#MOBILE", "#RESPONSIVE"], category:"mo", responsive:true},
          {id:10, client:"대우건설", name:"공공데이터 활용 시스템 구축", imageUrl:require("@/assets/images/img_proj9.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:11, client:"SK 브로드밴드", name:"위협인텔리전스 시스템 리뉴얼", imageUrl:require("@/assets/images/img_proj8.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:12, client:"SK", name:"Aibril Engage System 구축", imageUrl:require("@/assets/images/img_proj7.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:13, client:"투씨엘시스템", name:"BizCloud 리뉴얼", imageUrl:require("@/assets/images/img_proj6.png"), tags:["#PC", "#MOBILE", "#RESPONSIVE"], category:"mo", responsive:true},
          {id:14, client:"KORAIL", name:"스마트 학사관리 시스템 인재개발원 리뉴얼", imageUrl:require("@/assets/images/img_proj5.png"), tags:["#PC", "#MOBILE", "#RESPONSIVE"], category:"mo", responsive:true},
          {id:15, client:"KORAIL", name:"스마트 학사관리 시스템 적성검사 구축", imageUrl:require("@/assets/images/img_proj4.jpg"), tags:["#PC"], category:"pc", responsive:false},
          {id:16, client:"국기원", name:"사이버 연수원 리뉴얼", imageUrl:require("@/assets/images/img_proj3.png"), tags:["#PC", "#MOBILE", "#RESPONSIVE"], category:"mo", responsive:true},
          {id:17, client:"KNA 대한간호협회", name:"회원등록센터 리뉴얼", imageUrl:require("@/assets/images/img_proj2.png"), tags:["#PC", "#MOBILE"], category:"pm", responsive:false},
          {id:18, client:"KNA 대한간호협회", name:"면허신고센터 리뉴얼", imageUrl:require("@/assets/images/img_proj1.png"), tags:["#PC", "#MOBILE"], category:"pm", responsive:false}
        ],
      filterOption: "ALL",
      option: {
        itemSelector: ".item-box",
        getFilterData: {
          "ALL": function() {
            return true;
          },
          PC: function(el) {
            return el.category === "pc" || el.category === "pm";
          },
          MOBILE: function(el) {
            return el.category === "mo" || el.category === "pm";
          },
          RESPONSIVE: function(el) {
            return el.category === "mo" || !!el.responsive;
          }
        },
      }
    }
  },
  methods: {
      layout () {
        this.$refs.cpt.layout('masonry');
      },
      filter: function(key) {
        this.$refs.cpt.filter(key);
      },     
  }
}
</script>
