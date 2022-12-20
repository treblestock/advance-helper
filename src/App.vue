<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import CardsField from '@/components/CardsField.vue'
import Sidebar from '@/components/Sidebar.vue'
import Stats from '@/components/Stats.vue'


import { useStoreRunningDeck } from '@/stores/RunningDeck.js'
const storeRunningDeck = useStoreRunningDeck()

const props = defineProps({
  
})



const isFinished = computed(() => storeRunningDeck.isFinished)
const stats = computed(() => 
  isFinished ? storeRunningDeck.answerResaults : null
)


</script>

<template>
  <div class="page">
    <CardsField class="page__cards-field"
      v-if="!isFinished"
    />
    <Stats class="page__stats"
      v-else
      :stats="stats"
    />
    <Sidebar class="page__sidebar"
      :disabled="isFinished"
    />
  </div>
</template>

<style lang="sass">
// @import @/assets/css/_index


*, *:after, *:before
  box-sizing: border-box

html,
body
  margin: 0
  height: 7px
  height: 100%
  font-size: 10px 
  & > *
    font-size: 2rem


.page
  display: flex
  min-height: 100vh

  &__cards-field
    flex: 1 1 auto

  &__stats
    flex: 1 1 auto
    align-self: center


  &__sidebar
    flex: 0 0 max(4rem, 10%)
    height: 100vh
    background: yellow //


</style>
<!-- 
  View
    cards
      UI
        html-css
      viewLogic
        ui operations (:= events[] => VM.method(eventData) => model.method)
      UI + View logic = vm-integration
    
  model
    cards: []
      card: {
        upside: String
        downSide: String
      }



components
  Field (:= renders a card each time)
    card (:= upside, downside, its logic and animation)

 -->