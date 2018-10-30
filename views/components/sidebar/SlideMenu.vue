<template>
  <div class="slideout"
         :class="{ isOpen: isOpen }">
      <div class="slideout-opener"
           @click="toggle">{{openerText}}</div>
      <ul class="slideout-menu">
        <li class="slideout-menu-item"
        	v-for="item in menu">{{item}}</li>
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
      menu: [ 'Home', 'Mental', 'Physical', 'Challenges' ],
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
  width: 240px;
  height: 100vh;
  padding: 30px;
  background-color: rgba(200, 200, 200, 0.24);
  border: 5px solid rgba(32, 32, 32, 1);
  border-radius: 1.25em;
  transform: translateX(-100%);
  transition: transform 0.6s ease(out-cubic);

  &.isOpen {
    transform: translateX(0);
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
