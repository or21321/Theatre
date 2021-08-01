<template>
  <div class="theatre">
    <ul class="seats-group" v-for="seatsGroup in seatsGroups.seats" :key="seatsGroup.id">
      <li class="seat-preview"></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'theatre',
  components: {
  },
}
</script>
