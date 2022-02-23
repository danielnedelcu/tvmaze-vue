<template>
  <div>
    <h1>Search for shows</h1>
    <div class="input-container">
      <input v-on:keyup.enter="onSearch" type="text" v-model="search" placeholder="Search show.."/>
      <button v-on:click="onSearch" type="button">Search</button>
    </div>
    <div v-if="sortedShows.length" class="full-width">
      <show-item v-for="(item,  index) in sortedShows" 
        :key="item.show.id" 
        :index="index"
        :data="item.show"
        class="card"
      />
    </div>
    <div v-else>
      <p v-if="!isFirstLoad">No shows meet the serch criteria</p>
    </div>
  </div>
</template>

<script>
import {ASSIGN_TV_SHOW }  from "../constants/actions.type";
import { mapActions, mapGetters } from 'vuex';
import ShowItem from '../components/ShowItem';

export default {
  name: 'tvshows',

  components : {
    'show-item' : ShowItem,
  },    


  data () {
    return {
      search: '',
      isFirstLoad: true
    }
  },

  computed: {
      ...mapGetters ({
          showsList : 'tvShows/' + 'getTvShows'
      }),

      sortedShows() {
        var byName = this.showsList.slice(0);

        return byName.sort((a,b) => {
            let x = a.show.name;
            let y = b.show.name;

            return x < y ? -1 : x > y ? 1 : 0;            
        })
      }
  },              
  
  methods : {
      ...mapActions( {
          getTVShows: 'tvShows/' + ASSIGN_TV_SHOW
      }), 


    onSearch () {
       this.getTVShows(this.search);
       this.isFirstLoad = false;
       this.search = '';
    }      
  }
}
</script>

<style scoped>
    h1 {
      font-size: 20px;
    }

    .full-width {
      width: 100%;
      display: flex;
      flex-wrap: wrap;  
      justify-content: space-between;
    }

    .input-container {
      padding: 50px 0;
    }

    input {
      border: 1px solid #c6c6c6;
      padding: 12px;
      width: 400px;
      margin-bottom: 18px;
      color: #888;
      font-size: 16px;
      font-weight: 300;
      margin-right: 10px;
    }

    input[type="text"]:focus {
      outline: none !important;
      border: 1px solid black;
    }

    button {
      border: 0;
      outline: 0;
      padding: 16px;
      border-radius: 5px;
      background-color: #ddd;
      -webkit-appearance: button;
      cursor: pointer;
      text-transform: uppercase;
    }
</style>