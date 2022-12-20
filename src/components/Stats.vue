<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'



const props = defineProps({
  stats: {
    type: [Object, Array],
    required: true,
  }
})

const TIME_FORMAT = 1000

const totalCards = ref(props.stats.length)
const correctAnswers = computed(() => props.stats.reduce(
  (totalCorrect, answerData) => totalCorrect += answerData.resault, 0
) )

const totalTime = computed(() => props.stats.reduce(
  (totalTime, answerData) => totalTime += answerData.time, 0
) / TIME_FORMAT)

const failedCard = null // <!--TODO: make failed card info

</script>

<template>
  <div class="stats">
    <div class="stats__row">
      <div>accurance: </div>
      <div>{{ correctAnswers }}/{{ totalCards }} ({{(correctAnswers / totalCards).toFixed(2) * 100}}%) </div>
    </div>
    <div class="stats__row">
      <div>total time: </div>
      <div>{{totalTime.toFixed(2)}}sec</div>
    </div>
    <div class="stats__row">
      <div>time per card: </div>
      <div>{{(totalTime / totalCards).toFixed(2) }}sec</div>
    </div>
  </div>
</template>

<style scoped lang="sass">
// @import @/assets/css/_index

.stats
  padding: 1rem
  &__row
    display: flex
    justify-content: space-between

</style>