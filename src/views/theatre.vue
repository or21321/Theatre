<template>
  <div class="theatre">
    <ul class="seats-group" v-for="seatsGroup in seatsGroups.seats" :key="seatsGroup.id">
      <li class="seat-preview"></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import {utilService} from '@/services/util.service'

export default {
  name: 'theatre',
  components: {
  },
data() {
return {
  board:null,
}
},
created(){
   this.board = this.setBoard();
},
methods:{
   setBoard(){
      const sitRows = 28;
      const board = [];
      for(var i = 0; i < sitRows.length-1; i++){
         const sitRow = sitRows[i];
         for(var j = 0; j < sitRow.length-1; j++){
            if(j === 8 || j === 21){
               sitRows[i][j] = this.emptySit(i,j);
              continue;
            }
            sitRows[i][j] = {
               id:'11',
               status:1,
               x:j,
               y:i
            }
         }
         board.push(sitRows[i]);
      }
   },
   emptySit(i,j){
         return {
            id:'11',
            status:4,
            x:j,
            y:i
         }
      }      
},
}
</script>
