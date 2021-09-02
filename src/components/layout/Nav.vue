<template>
  <nav class="gnb-wrap" v-show="open">
    <transition name="slide-fade">
      <div class="gnb-box" v-show="open">
        <ul class="gnb">
          <!-- <li><router-link to="/" @click.native="changeToggle">HOME</router-link></li>
                    <li><router-link to="/about" @click.native="changeToggle">ABOUT</router-link></li>
                    <li><router-link to="/portfolio" @click.native="changeToggle">PORTFOLIO</router-link></li> -->
          <li v-for="menu in menus" :key="menu.id">
            <router-link :to="menu.path" @click.native="changeToggle"
              ><font-awesome-icon :icon="menu.icon" />{{
                menu.name
              }}</router-link
            >
          </li>
        </ul>
        <div class="contact-box">
          <p>CONTACT<font-awesome-icon icon="hand-point-down" /></p>
          <ul class="info">
            <li v-for="c in contact" :key="c.id">
              <font-awesome-icon :icon="c.icon" />{{ c.info }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>
<script>
export default {
  props: ["open"],
  data() {
    return {
      isOpen: true,
      menus: [
        { id: 1, path: "/", name: "HOME", icon: "home" },
        { id: 2, path: "/about", name: "ABOUT", icon: "user" },
        { id: 3, path: "/portfolio", name: "PORTFOLIO", icon: "file" },
      ],
      contact: [
        { id: 1, info: "010.9434.1823", icon: "mobile-alt" },
        { id: 2, info: "blueelf1124@gmail.com", icon: "envelope" },
      ],
    };
  },
  methods: {
    changeToggle() {
      this.$emit("change-toggle", !this.isOpen);
      document.body.classList.remove("hidden");
    },
  },
};
</script>
