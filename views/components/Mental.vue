<template>
  <div class="container-fluid">

<div class="row"> 
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">MUSCLE MEMORY</h5>
        <p class="card-text">Let the music play. Learn to play a musical instrument or join a choir. 
          Studies show that learning something new and complex over a longer period of time is ideal for the aging mind.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">MUSCLE MEMORY</h5>
        <p class="card-text">Do math in your head. Figure out problems without the aid of pencil, paper, or computer.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">MUSCLE MEMORY</h5>
        <p class="card-text">Refine your hand-eye abilities. 
          Take up a new hobby that involves fine-motor skills, such as drawing, painting, assembling a puzzle, etc.</p>
      </div>
    </div>
  </div>
</div>
<br>

<div class="row"> 
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">SENSORY EXERCISE</h5>
        <p class="card-text">When eating out try to deconstruct and visualize what ingredients went in the dish, including subtle herbs and spices.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">SENSORY EXERCISE</h5>
        <p class="card-text">When going out to start your day, simulate what you might encounter whether it be the smell of the coffee shop you go to 
          in the morning, the chills of morning wind hitting your face or the sound of the streets you will be traveling on.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">SENSORY EXERCISE</h5>
        <p class="card-text">Interact with a specific object like an orange, banana, a jacket or any object (works better with fruit) and run through 
          each sense as possible. Fell the texture, smell the smell, look at the color.</p>
      </div>
    </div>
  </div>
</div>
<br>

<div class="row"> 
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">MEDITATION</h5>
        <p class="card-text">Spend about 10-30min sitting or laying comfortably at a place where you feel most at easy. Practice and focus on your 
          breathing when you sit at your comfortable position. Make sure to breathe by extending your gut instead of using your whole chest.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">MEDITATION</h5>
        <p class="card-text">[AUDIO}</p>
        <audio controls></audio>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card" id="cardm">
      <div class="card-body">
        <h5 class="card-title">MEDITATION</h5>
        <p class="card-text">[AUDIO]</p>
        <audio controls></audio>
      </div>
    </div>
  </div>
</div>

  </div>

</template>


<script>
  export default {
    name: 'Mental',
    data () {
      return {
        activities: []
      }
    }
  }
</script>


<style lang="scss">

.container-fluid {
  margin-right: 250px;
  overflow: scroll;
}

#cardm {
background: rgb(30,87,153); /* Old browsers */
background: -moz-linear-gradient(top, rgba(30,87,153,1) 0%, rgba(41,137,216,1) 41%, rgba(41,137,216,1) 41%, rgba(35,186,176,1) 80%, rgba(125,185,232,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 41%,rgba(41,137,216,1) 41%,rgba(35,186,176,1) 80%,rgba(125,185,232,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 41%,rgba(41,137,216,1) 41%,rgba(35,186,176,1) 80%,rgba(125,185,232,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
border-bottom-color: aqua;
}

.card-title {
    animation: color-change 15s infinite;
}
    @keyframes color-change {
        0% { color: rgb(0, 0, 0); }
        15% {color: rgb(54, 54, 54);}
        28% {color: rgb(95, 95, 95); }
        40% {color: rgb(175, 175, 175);}
        50% { color: rgb(255, 255, 255); }
        65% {color: rgb(175, 175, 175);}
        72% {color: rgb(95, 95, 95); }
        80% {color: rgb(54, 54, 54);}
        100% {color: rgb(0, 0, 0)}
    }

.card-text {
  color: white;
  text-shadow: 5px 7px 19px rgba(0, 0, 0, 1);
  font-family: inherit;
  text-align: center;
}

</style>
