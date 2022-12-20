import { defineStore } from "pinia"

import { useStoreDeck } from "./Deck"


export const useStoreRunningDeck = defineStore('RunningDeck', {
  state: () => ({
    // cards set data
    answerResaults: [],

    // exact card data
    currentCardIndex: null,
    timeStart: Date.now(), //
  }),
  getters: {
    cards() {
      this.currentCardIndex = 0
      const storeDeck = useStoreDeck()
      return storeDeck.cards
    },

    isFinished() {return this.cards.length < this.currentCardIndex},
    
    // current card
    currentCard() {
      return this.isFinished ? null : this.cards[this.currentCardIndex]
    },
    currentCardId() {return this.currentCard?.id},
    // timeStart() {return (this.currentCardIndex, Date.now() )},
    timePast() {return Date.now() - this.timeStart},
  },
  actions: {
    // cards set manipulations


    // exact card operations
    showNextCard() {
      this.timeStart = Date.now()
      this.currentCardIndex++
    },
    showPrevCard() {
      this.currentCardIndex = this.currentCardIndex === 0 ? 
        this.cards.length : this.currentCardIndex - 1
    },
    markCardCorrect() {this._saveAnswerResault(true)},
    markCardFailed() {this._saveAnswerResault(false)},

    _saveAnswerResault(resault) {
      const answerResault = this._createAnswerResault({time: this.timePast, resault})
      this.answerResaults.push(answerResault)
      this.showNextCard()
    },
    _createAnswerResault({time, resault}) {
      return ({
        cardId: this.currentCardId,
        time,
        resault,
      })
    },
  },
})