import anime from 'animejs';

const VueAnime = {
  install (Vue, options) {
    Vue.$animeJS = anime;
  }
}

export default VueAnime
