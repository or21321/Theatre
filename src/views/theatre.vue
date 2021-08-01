<template>
  <div class="board">
    <ul class="seats-row" v-for="(seatsRow, idx) in board" :key="idx">
      <li class="seat-col" v-for="seatCol in seatsRow" :key="seatCol.id">
        <span :class="{ black: seatCol.status === 4 }">
          <span class="material-icons" @click="confirmPopup(seatCol)"
            >event_seat</span
          ></span
        >
      </li>
    </ul>

    <div class="confirm-popup" v-if="currSeat">
      <div class="header">
        <h3>Confirm selection</h3>
        <span class="material-icons close-btn" @click="close">close</span>
      </div>

      <div class="seat-details">
        <span>Row: {{ currSeat.x }}</span>
        <span>Seat: {{ currSeat.y }}</span>
        <span>Price: {{ currSeat.price }}</span>
      </div>

      <button class="checkout-btn" @click="order(currSeat)">Order</button>
    </div>
  </div>
</template>

<script>
import { utilService } from "@/services/util.service.js";

export default {
  name: "theatre",
  components: {},
  data() {
    return {
      board: null,
      currSeat: null,
    };
  },
  created() {
    this.board = this.setBoard();
  },
  methods: {
   order(seat) {
      console.log('order()', seat);
   },
   close() {
      this.currSeat = null
   },
    confirmPopup(seat) {
      console.log("confirmPopup()", seat);
      this.currSeat = seat;
    },
    setBoard() {
      // const sitRows = [];
      const sitCols = 9;
      const board = [];
      for (var i = 0; i < 28; i++) {
        const sitRow = [];
        for (var j = 0; j < sitCols; j++) {
          if (i === 7 || i === 20) {
            sitRow.push(this.emptySit(i, j));
            continue;
          }
          sitRow.push({
            id: utilService.makeId(),
            status: 1,
            x: j,
            y: i,
            price: "15$",
          });
        }
        board.push(sitRow);
      }
      return board;
    },
    emptySit(i, j) {
      return {
        id: utilService.makeId(),
        status: 4,
        x: j,
        y: i,
      };
    },
  },
};
</script>
