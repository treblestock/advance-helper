<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import SidebarActions from '@/components/SidebarActions.vue'
import Timer from '@/components/Timer.vue'

const props = defineProps({
  disabled: Boolean
})

const timeStart = ref(Date.now() )

</script>

<template>
  <div class="sidebar">
    <div class="burger">X</div>
    <Timer :start="timeStart"/>
    <SidebarActions 
      :class="disabled ? '_disabled' : ''"
    />
    <div class="filler"></div>
  </div>  
</template>

<style scoped lang="sass">
// @import @/assets/css/_index 

.sidebar
  padding: 2rem .5rem

  display: flex
  flex-direction: column
  justify-content: space-between


._disabled
  pointer-events: none

</style>