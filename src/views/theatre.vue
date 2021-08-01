<template>
  <main>
    <div class="board">
      <ul class="seats-row" v-for="(seatsRow, idx) in board" :key="idx">
        <li
          class="seat-col"
          v-for="seatCol in seatsRow"
          :key="seatCol.id"
          @click="setStauts(seatCol)"
        >
          <span
            :class="{
              black: seatCol.status === 4,
              select: seatCol.status === 3,
              unAvailable: seatCol.status === 2,
            }"
          >
            <span class="material-icons">event_seat</span></span
          >
        </li>
      </ul>
    </div>

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

    <div class="info">
      <section class="available-seat">
        <span class="available">
          <span class="material-icons">event_seat</span></span
        >
        <span>Available seat</span>
      </section>
      <section class="reserved-seat">
        <span class="unAvailable">
          <span class="material-icons">event_seat</span></span
        >
        <span>Reserved seat</span>
      </section>
      <section class="select-seat">
        <span class="select">
          <span class="material-icons">event_seat</span></span
        >
        <span>Select seat</span>
      </section>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { boardService } from "@/services/board.service.js";

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
    this.board = boardService.query();
  },
  methods: {
    async close() {
      try {
        this.currSeat.status = 1;
        await boardService.save(this.board);
        this.currSeat = null;
      } catch (err) {
        console.log("Error:", err);
      }
    },
    setStauts(seat) {
      this.board.forEach((sitsRow) => {
        sitsRow.forEach((currSeat) => {
          if (currSeat.status === 3) currSeat.status = 1;
        });
      });
      if (seat.status !== 1) return;
      this.currSeat = seat;
      seat.status = 3;
    },
    async order(seat) {
      try {
        seat.status = 2;
        await boardService.save(this.board);
        this.currSeat = null;
      } catch (err) {
        console.log("Had a problem ordering seat", err);
      }
    },
  },
};
</script>
