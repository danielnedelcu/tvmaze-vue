<template>
  <div>
      <img v-bind:src="showPosted" />
      <span class="show-name">{{ this.item.name }}</span>
  </div>
</template>

<script>
import  store from '../store/index'

export default {
    name: 'ShowItem',
    store,
    props : {
        data : { type : Object, required : true }
    },

    data () {
      return {
        item: this.data,
        image: this.showPosted
      }
    },
    
    computed: {
      showPosted() {
        return this.data.image ? this.data.image.medium : 'https://via.placeholder.com/400x600'
      }
    }

}
</script>

<style scoped>
    .card {
        width: 50%;
        border-radius : 0;
        float: left;    
        background: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        position: relative;   
        display: flex;
        justify-content: center;
        align-items: center; 
        overflow: hidden;
    } 

    @media (min-width: 768px) {
      .card {
        width: 33.33333%;
      }
    }
    .show-name {
      position: absolute;
      bottom: 0;
      z-index: 1;
      display: block;
      left: 0;
      right: 0;
      background-color: rgb(0 0 0 / 56%);
      color: white;
      font-size: 20px;
      padding: 30px 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
</style>