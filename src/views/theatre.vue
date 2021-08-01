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
  seatsGroups: {
    // id: utilService.makeId(),
    name: 'seats group 1',
    seats: [
      {x:5,y:1},
      {x:6,y:1},
      {x:7,y:1},
      {x:5,y:2},
      {x:6,y:2},
      {x:7,y:2},
      {x:4,y:3},
      {x:5,y:3},
      {x:6,y:3},
      {x:7,y:3},
      {x:4,y:4},
      {x:5,y:4},
      {x:6,y:4},
      {x:7,y:4},
      {x:3,y:5},
      {x:4,y:5},
      {x:5,y:5},
      {x:6,y:5},
      {x:7,y:5},
      {x:2,y:6},
      {x:3,y:6},
      {x:4,y:6},
      {x:5,y:6},
      {x:6,y:6},
      {x:7,y:6},
      {x:2,y:7},
      {x:3,y:7},
      {x:4,y:7},
      {x:5,y:7},
      {x:6,y:7},
      {x:7,y:7},
      {x:1,y:8},
      {x:2,y:8},
      {x:3,y:8},
      {x:4,y:8},
      {x:5,y:8},
    ],
  }
  ,
}
},
}
</script>
