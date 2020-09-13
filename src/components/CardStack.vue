<template>
  <section class="cardStack">
        <Card 
        v-for="(card, index) in cards"
        :key="index"
        :cardData="card" 
        :style="{zindex: 10, marginTop: '-10rem'}"
        />
    <button @click="goTo" id="addButton">ADD A NEW CARD</button>
    </section>
</template>

<script>
import Card from '@/components/Card';
export default {
    name: 'CardStack',
    components: {
      Card
    },
    props: {
    cards: Array,
  },
  data() {
    return {
      cardObject: {
        cardNumber: '',
        cardholderName: '',
        valid: '',
        ccv: '',
        vendor: ''
      }
    }
  },
  computed: {
    cardInfo(){
      return this.card
    }
  },
  methods: {
    goTo(){
      this.$router.push("/addCard")
    }
  }
}
</script>


<style scoped lang="scss">
  .cardStack {
  margin: 15rem;
}
.cardStack:hover {
  cursor: pointer;
}
  button {
    width: 382px;
    height: 80px;
    margin-top: 2rem;
    box-sizing: border-box;
    border: 1px solid #000;
    border-radius: 8px;
    font-size: 2rem;
    margin-top: 0.5rem;
  }
</style>
