<template>
  <main class="main">
    <!-- visual -->
    <section class="visual">
      <div class="bg"></div>
      <div class="inner">
        <div class="text-box">
          <h2 class="visual-title title1" data-aos="fade-up" data-aos-duration="800">{{ visualText1 }}</h2>
          <h2 class="visual-title title2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">{{ visualText2 }}</h2>
          <h2 class="visual-title title3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{{ visualText3 }}</h2>
        </div>
      </div>
    </section>
    <!-- //visual -->

    <!-- about -->
    <section class="about">
      <div class="inner">
        <div class="bg"></div>
        <h3 class="title" data-aos="fade-right" data-aos-duration="500">
          <p>안녕하세요.</p>
          <p>5년차 웹퍼블리셔 <strong class="point">권민지</strong>입니다.</p>
        </h3>
        <div class="illust-box">
          <div class="img-mo">
            <img src="@/assets/images/img_mo.png" alt="모바일 일러스트">
            <div class="crop">
              <img src="@/assets/images/img_mo2.png" alt="모바일 일러스트">
            </div>
          </div>
          <div class="img-tb">
            <img src="@/assets/images/img_tb.png" alt="태블릿 일러스트">
            <div class="crop">
              <img src="@/assets/images/img_tb2.png" alt="태블릿 일러스트">
            </div>
          </div>
        </div>
        <div class="text-box" data-aos="fade-left" data-aos-duration="500">
          <p>퍼블리셔는 디자이너와 개발자의 중간에 위치한 포지션이기 때문에 소통을 통한 명확한 이해가 필요하고 커뮤니케이션 능력이 매우 중요하며, 중간에서 두 파트에 의견을 제안할 수 있는 매력적인 직업이라고 생각합니다.</p><br><br>
          <p>좋아하는 일을 더 잘하고 싶다는 마음으로 늘 고민하고 배우며 더 나은 방향으로 나아가고 있습니다.</p>
        </div>
        <div class="btn-more-box" data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100">
            <a href="/about" class="btn-more" title="VIEW MORE"><span>VIEW MORE</span><span class="arr-right"></span></a>
        </div>
      </div>
    </section>
    <!-- //about -->

    <!-- portfolio -->
    <section class="portfolio">
      <div class="inner">
        <h3 class="title" data-aos="fade-right" data-aos-duration="500">최근 작업물을 살펴보세요.</h3>
        <Card />
        <div class="btn-more-box" data-aos="zoom-in-up" data-aos-anchor-placement="top-center" data-aos-duration="500" data-aos-delay="500">
            <a href="/portfolio" class="btn-more" title="VIEW MORE"><span>VIEW MORE</span><span class="arr-right"></span></a>
        </div>
      </div>
    </section>
    <!-- //portfolio -->

    <!-- contact -->
    <section class="contact">
      <div class="inner">
        <p class="text1" data-aos="zoom-in-up" data-aos-anchor-placement="center-center" data-aos-duration="1500" data-aos-delay="300">
          <span>Let's create</span>
          <span>something together</span>
        </p>
        <p class="text2" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="600">Drop me a line!</p>
        <ul class="my-info" data-aos="flip-up" data-aos-duration="1500" data-aos-delay="900">
          <li><font-awesome-icon icon="mobile-alt" />+82-10.9434.1823</li>
          <li><font-awesome-icon icon="envelope" />blueelf1124@gmail.com</li>
        </ul>
      </div>
    </section>
    <!-- //contact -->
  </main>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      visualText1: 'WEB',
      visualText2: 'PUBLISHER',
      visualText3: 'GWON MIN JI',
    }
  },
}
</script>