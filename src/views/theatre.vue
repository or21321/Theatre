<template>
  <div class="board">
    <ul class="seats-row" v-for="(seatsRow,idx) in board" :key="idx"> 
      <li class="seat-col" v-for="seatCol in seatsRow" :key="seatCol.id">
         <!-- <span v-if="seatCol.status === 4"><span class="material-icons">event_seat</span></span> -->
         <span :class="{'black' : (seatCol.status === 4)}">
            <span class="material-icons">event_seat</span></span>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import {utilService} from '@/services/util.service.js'

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
      // const sitRows = [];
      const sitCols = 9;
      const board = [];
      for(var i = 0; i < 28; i++){
         const sitRow = [];
         for(var j = 0; j < sitCols; j++){
            if(i === 7 || i === 20){
               sitRow.push(this.emptySit(i,j));
              continue;
            }
            sitRow.push({
               id: utilService.makeId(),
               status:1,
               x:j,
               y:i,
            })
         }
         board.push(sitRow);
      }
      return board;
   },
   emptySit(i,j){
         return {
            id: utilService.makeId(),
            status:4,
            x:j,
            y:i,
         }
      }      
},
}
</script>
