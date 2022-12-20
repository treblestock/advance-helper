<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'



const props = defineProps({
  timeStart: {
    type: Number,
    default: Date.now(),
  },
})

const UPDATE_TIMER_UI_DELAY = 1000
const TIMER_FORMAT = 1000

const _timePast = ref(0)
const timePast = computed(() => _timePast.value / TIMER_FORMAT)

let timerId

onMounted(() => {
  timerId = setInterval(() => _timePast.value += UPDATE_TIMER_UI_DELAY, UPDATE_TIMER_UI_DELAY)
})

onBeforeUnmount(() => clearInterval(timerId), console.log('cleared...') )


</script>

<template>
  <div class="timer">
    {{ timePast }}
  </div>
</template>

<style scoped lang="sass">
// @import @/assets/css/_index
.timer
  font-size: 1.5rem


</style>