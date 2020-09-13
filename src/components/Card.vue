<template>
  <section id="form">
    <div id="card" 
    :class="selectVendor"
    @click="showActiveCard"
    >
      <section id="cardTop">
        <img src="@/assets/chip-light.svg" alt="chip">
        <img v-if="cardData.vendor == 'bitCoin'" src="@/assets/vendor-bitcoin.svg" alt="vendor"/>
        <img v-if="cardData.vendor == 'blockChain'" src="@/assets/vendor-blockchain.svg" alt="vendor"/>
        <img v-if="cardData.vendor == 'evil'" src="@/assets/vendor-evil.svg" alt="vendor"/>
        <img v-if="cardData.vendor == 'ninja'" src="@/assets/vendor-ninja.svg" alt="vendor"/>
      </section>
      <section id="cardCenter">
        <h3> {{ info.cardNumber }} </h3>
      </section>
      <section id="cardBottom">
        <p>CARDHOLDER NAME</p>
        <p>VALID THRU</p>
      </section>
      <section id="cardBottomInfo">
        <h4> {{ cardData.cardholderName }} </h4>
        <p> {{ cardData.valid }} </p>
      </section>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Card',
  props: {
    cardData: Object,
  },
  computed: {
    selectVendor(){
      let vendorClass = ""
      if (this.cardData.vendor === "bitCoin") {
        vendorClass = "bitCoin"
      } 
      if (this.cardData.vendor === "blockChain") {
          vendorClass = "blockChain"
      }
      if (this.cardData.vendor === "evil") {
        vendorClass = "evil"
      }
      if (this.cardData.vendor === "ninja") {
        vendorClass = "ninja"
      }
      return vendorClass
    },    
    info(){
      return this.cardData
    }
  },
  methods: {
    infoVendor(){
      this.$emit('cardInfo', this.cardInfo)
    },
    showActiveCard(index) {
      let activeCard = this.cards[index]
      this.$emit('cards', activeCard)
    }
  }
}
</script>

<style scoped lang="scss">
#form {
  display: flex;
  justify-content: center;
}
#card {
  width: 382px;
  height: 241px;
  border: solid 1px gray;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  
  background: rgba(160, 159, 159, 0.158);

  &.bitCoin {
    background-color: #ffae34;
  }
  &.blockChain {
    background-color: #8B58F9;
  }
  &.evil {
    background-color: #F33355;
  }
  &.ninja {
    background-color: #222222;
  }
}

#cardTop, #cardBottom, #cardBottomInfo {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
}
#cardCenter {
  width: 380px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#vendorImg {
  margin-top: 2rem;
  margin-right: 1.5rem;
}
img {
  margin-left: 0.5rem;
}

p, h4 {
  padding: 0;
  margin: 0;
}


</style>
