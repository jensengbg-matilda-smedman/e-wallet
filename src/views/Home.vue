<template>
  <div class="home">
    <Top />
    <h4>ACTIVE CARD</h4>
    <Card 
    :cardData="activeCard" 
    @showCard="activeCard"
    />
    <CardStack 
    :cards="cards" 
    @getTheCards="getTheCards" 
    @activeCard="showCard"/>
  </div>
</template>

<script>
import Card from '@/components/Card';
import Top from '@/components/Top';
import CardStack from '@/components/CardStack';
export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack
  },
  props: {
    cardInfo: Object,
    cards: Array
  },
data() {
    return {
      cardsArray: [
        {
          cardNumber: "",
          cardholderName: "",
          valid: "",
          ccv: "",
          vendor: "",
        }
      ]
    }
  },
  computed: {
    activeCard(){
      let active = this.cards.filter(card => card.key == this.$route.params.key)[0]
      return active
    }
  },
  methods: {
    getTheCards() {
      let cards = localStorage.getItem('cards')
      return cards
    },
    showCard(value) {
      return (this.card = value), this.activeCard()
    }
  }
}

</script>

<style scoped lang="scss">

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  h4{
    display: flex;
    justify-content: center;
    color: gray;
  }
</style>