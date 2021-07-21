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

    <!-- about -->
    <section class="about">
      <div class="inner">
        <h3 class="title" data-aos="fade-right">저를 소개합니다.</h3>
        <!-- profile -->
        <div class="profile-wrap">
          <div class="profile-box">
            <div class="img-box" data-aos="fade-right">
              <img :src="profile.imageUrl" alt="권민지 증명사진">
            </div>
            <ul class="profile" data-aos="fade-left">
              <li><span class="left">이름</span><span class="right">{{profile.name}}</span></li>
              <li><span class="left">생년월일</span><span class="right">{{profile.birth}}</span></li>
              <li><span class="left">거주지</span><span class="right">{{profile.address}}</span></li>
              <li><span class="left">이메일</span><span class="right">{{profile.email}}</span></li>
              <li><span class="left">전화번호</span><span class="right">{{profile.cellphone}}</span></li>
            </ul>
          </div>
          <div class="text-box" data-aos="zoom-in-down">
            <p>저는 코드를 통해 UI를 그려내는 일을 좋아합니다.</p><br><br>
            <p>컴포넌트 단위의 유지보수에 최적화 된 마크업과 의미있는 구조의 시멘틱 마크업에 관심이 많으며, CSS와 Javascript를 활용한 동적 모션을 구현하는 것과 사용자 입장에서 더 나은 UI 방향에 대해 고민하곤 합니다.</p><br><br>
            <p>좋아하는 일을 즐기면서 잘하는 것, 제가 꿈꾸는 저의 모습입니다.</p>
          </div>
        </div>
        <!-- //profile -->

        <h3 class="title" data-aos="fade-right">경력사항</h3>
        <!-- career -->
        <div class="career-wrap">
          <ul class="career"> 
            <li data-aos="fade-up" data-aos-anchor-placement="top-center" v-for="career in careers" :key="career.id"><p><span>{{ career.company }}</span><span class="text">{{ career.text}}</span></p><span class="term">{{ career.term }}</span></li>
          </ul>
        </div>
        <!-- //career -->

        <h3 class="title" data-aos="fade-right">제가 제일 잘하는 일을 소개합니다.</h3>
        <!-- skill -->
        <div class="skill-wrap">
          <div class="skill-box" v-for="skill in skills" :key="skill.id" data-aos="flip-left">
            <div class="skill">
              <p class="skill-title"><font-awesome-icon icon="check" />{{ skill.title }}</p>
              <p class="skill-text">{{ skill.text }}</p>
            </div>
          </div>
        </div>
        <!-- //skill -->
      </div>
    </section>
    <!-- about -->
  </main>
</template>
<script>
export default {
  data() {
    return {
      visualText1: "WANT",
      visualText2: "TO KNOW",
      visualText3: "MORE?",
      profile:{
        name:"권민지", birth:"1991.11.24", address:"인천광역시 부평구", email:"blueelf1124@gmail.com", cellphone:"+82-10.9434.1823", imageUrl:require("@/assets/images/img_gmj.jpg"),
      },
      careers:[
        {id:1, company:"(주)비즈마인", text:"- 다양한 웹 서비스 퍼블리싱 전담", term:"2017. 11 ~ 2020. 11"},
        {id:2, company:"위크리에이티브", text:"- 자사 서비스 퍼블리싱 전담", term:"2015. 07 ~ 2015. 12"},
        {id:3, company:"(주)한국모니터링", text:"- 자사 서비스 퍼블리싱 전담", term:"2012. 11 ~ 2014. 12"}
      ],
      skills:[
        {id:1, title:"UI Development", text:"유지보수, 재사용을 고려한 코드를 작성하여 탄탄한 업무 프로세스를 지향합니다."},
        {id:2, title:"Mark Up", text:"웹표준을 기준으로 의미있는 시멘틱 마크업, 웹접근성이 고려된 마크업을 작성합니다."},
        {id:3, title:"Responsive Web", text:"UI/UX를 고려하여 다양한 기기, 다양한 브라우저에 최적화 된 퍼블리싱을 합니다."},
        {id:4, title:"Co-Work", text:"기획자, 디자이너, 개발자와 항상 원활한 협업을 하기 위해 노력하며, 서로의 의도를 이해하고 존중하여 '함께' 좋은 결과물을 만듭니다."}
      ]
    }
  },
}
</script>
