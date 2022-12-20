<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import Card from '@/components/Card.vue'

import { useStoreRunningDeck } from '@/stores/RunningDeck.js'
const storeRunningDeck = useStoreRunningDeck()


const props = defineProps({
  
})

const card = computed(() => storeRunningDeck.currentCard)

</script>

<template>
  <div class="cards-field">
    <!-- <Card class="cards-field__card"
      v-for="card in cards" :key="card.id"
      :card="card"
    ></Card> -->

    <Card class="cards-field__card" 
      v-if="card"
      :card="card"
    />
    
  </div>
</template>

<style scoped lang="sass">
// @import @/assets/css/_index

.cards-field

  // &__container
  overflow: hidden

</style>