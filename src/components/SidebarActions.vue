<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'


import { useStoreRunningDeck } from '@/stores/RunningDeck.js'
const storeRunningDeck = useStoreRunningDeck()


const props = defineProps({
  disabled: Boolean,
})

const emit = defineEmits([
  'showNextCard',
  'showPrevCard',
  'markCardCorrect',
  'markCardFailed',
])

</script>

<template>
  <div class="sidebar-actions"
    :class="disabled ? '_disabled' : ''"
  >
    <div class="btn-icon" @click="storeRunningDeck.showNextCard"> &#8594; </div>
    <div class="btn-icon" @click="storeRunningDeck.showPrevCard"> &#8592; </div>
    <div class="btn-icon" @click="storeRunningDeck.markCardCorrect"> &#10004; </div>
    <div class="btn-icon" @click="storeRunningDeck.markCardFailed"> X </div>
  </div>  
</template>

<style scoped lang="sass">
// @import @/assets/css/_index
.sidebar-actions

._disabled
  pointer-events: none

.btn-icon
  width: 2.5rem
  height: 2.5rem

  display: flex
  justify-content: center
  align-items: center


</style>