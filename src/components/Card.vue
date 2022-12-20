<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'




const props = defineProps({
  card: {
    required: true,
    type: Object,
  },
})

const isAnswerShown = ref(false)

function toggleShow() {
    isAnswerShown.value = !isAnswerShown.value
}

</script>

<template>
  <div class="card" @click="toggleShow"
  >
    <div class="card__side card__downside"
      :class="isAnswerShown ? '' : '_hidden' "
    >
      {{ card.downside }}
    </div>
    <div class="card__side card__upside"
    >
      {{ card.upside }}
    </div>
  </div>
</template>

<style scoped lang="sass">
// @import @/assets/css/_index

.card
  width: 100%
  height: 100%

  display: flex
  flex-direction: column

  transition: .1s width linear

  &__side
    flex: 0 0 50%
    


    padding: 2rem
    display: flex
    justify-content: center
    align-items: center

    border: 1px solid blue

    transition: .1s height linear
    &._hidden
      visibility: hidden
    
    




</style>