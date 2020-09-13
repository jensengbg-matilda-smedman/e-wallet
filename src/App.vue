<template>
  <div id="app">
    <router-view 
    :cards="cards"
    :cardInfo="cardInfo" 
    @cardInfo="listenCard"
    @addCards="addCards"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      cardInfo: {
        cardNumber: '',
        cardholderName: '',
        valid: '',
        ccv: '',
        vendor: '',
      },
      cards: []
    }
  }, 
  methods: {
    listenCard(value) {
      return (this.cardInfo = value), this.addCards();
    },
    addCards(){
      this.cards.push(this.cardInfo);
      localStorage.setItem('allCards',JSON.stringify(this.cards))
    }
  },
  mounted(){
    let cards = localStorage.getItem('allCards')
    if(cards !== null) {
      this.cards = JSON.parse(cards)
    }
  }
}
</script>


<style lang="scss">

</style>
