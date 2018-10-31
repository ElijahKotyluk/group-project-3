<template>
  <div class="slideout"
         :class="{ isOpen: isOpen }">
      <div class="slideout-opener"
           @click="toggle">{{openerText}}</div>
      <ul class="slideout-menu">
        <router-link class="slideout-menu-item" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
      </ul>
    </div>
</template>


<script>
export default {
  name: 'SlideMenu',
  data () {
    return {
      openerText: '>',
      isOpen: false,
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'Mental',
          page: '/mental'
        },
        {
          id: 2,
          text: 'Physical',
          page: '/physical'
        },
        {
          id: 3,
          text: 'Activities',
          page: '/Activities'
        }
      ]
    }
  },
  methods: {
    open() {
      this.openerText = '<';
      this.isOpen = true;
    },
    close() {
      this.openerText = '>';
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }
}
</script>


<style lang="scss">
.info {
  position: absolute;
  top: 50%; left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.title {
  font-size: 18px;
  font-weight: 300;
}

.description {
  margin-top: 20px;
}

/*
Our Zap Slideout styles...
 */
.slideout {
  position: relative;
  height: 100vh;
  padding: 30px;
  background-color: rgba(200, 200, 200, 0.24);
  border-right: 5px solid rgba(32, 32, 32, 1);
  transform: translateX(-100%);
  transition: transform 0.6s ease(out-cubic);

  &.isOpen {
    transform: translateX(0);
    width: 15%;
  }
}

.slideout-opener {
  position: absolute;
  top: 20px;
  left: 100%;
  margin-left: 20px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.slideout-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 300;
  list-style-type: none;
  color: #fff;
  padding: 0px;
}

.slideout-menu-item,
.slideout-menu-item--small {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-top: 20px;
  }
}

.slideout-menu-item {
  font-size: 18px;
}
</style>
