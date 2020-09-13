<template>
    <div id="addCard">
      <Top />
      <h4>NEW CARD</h4>
      <Card :cardData="info" />
      <CardForm v-on:cardInfo="addInfo" />
    </div>
</template>

<script>
import CardForm from '@/components/CardForm'
import Card from '@/components/Card'
import Top from '@/components/Top'
export default {
  name: 'AddCard',
  components: {
    CardForm,
    Card,
    Top
  },
  props: {
    cardInfo: Object
  },
  data() {
    return {
      info: {
        cardNumber: '',
        cardholderName: '',
        valid: '',
        ccv: '',
        vendor: ''
      }
    }
  },
  methods: {
    addInfo(value) {
        this.info = value;
        this.$emit("cardInfo", this.info)
    }
  }
}
</script>


<style scoped lang="scss">

#addCard {
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