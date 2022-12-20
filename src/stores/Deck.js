import { defineStore } from "pinia"

import { createDeckFromPairs, shuffleArr } from "../helpers"

import numberLetterCode from "@/assets/number-letter-code"


export const useStoreDeck = defineStore('StoreDeck', {
  state: () => ({
    deckId: 'test',

    // cards: [
    //   {
    //     id: 1,
    //     upside: 'upside value',
    //     downside: 'downside value',
    //   },
    //   {
    //     id: 2,
    //     upside: 'upside value 2',
    //     downside: 'downside value 2',
    //   },
    //   {
    //     id: 3,
    //     upside: 'upside value 3',
    //     downside: 'downside value 3',
    //   },
    // ]
    cards: shuffleArr(createDeckFromPairs(numberLetterCode)), 
      //? obj sorts by alphabat all the keys, 
      //? therefore the initial order is changed
  }),
  actions: {

  },
  getters: {

  },
})

