<template>
  <main>
    <div class="board">
      <ul class="seats-row" v-for="(seatsRow, idx) in board" :key="idx">
        <li
          class="seat-col"
          v-for="seatCol in seatsRow"
          :key="seatCol.id"
          @click="setStauts(seatCol)">
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
    <div class="info">
      <section class="available-seat">
        <span class="available"> <span class="material-icons">event_seat</span></span>
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
          <span class="material-icons">event_seat</span></span>
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
    };
  },
  created() {
    this.board = boardService.query();
  },
  methods: {
    setStauts(seat) {
      this.board.forEach((sitsRow) => {
        sitsRow.forEach((sit) => {
          if (sit.status === 3) sit.status = 1;
        });
      });
      if (seat.status !== 1) return;
      seat.status = 3;
    },
  },
  order(seat){
    seat.status = 2;
    boardService.save(this.board);
  }
};
</script>
