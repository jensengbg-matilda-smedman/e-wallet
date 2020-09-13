<template>
  <section id="form">
    <div class="cardForm">
        <p class="start">CARD NUMBER</p>
        <input 
        v-model.number="cardInfo.cardNumber" 
        placeholder="XXXX XXXX XXXX XXXX" 
        type="text"
        maxlength="16"
        id="number"
        onkeypress='return event.charCode >= 48 && event.charCode <= 57'>

        <p class="start" >CARDHOLDER NAME</p>
        <input 
        v-model="cardInfo.cardholderName" 
        placeholder="FIRSTNAME LASTNAME" type="text">
      <section class="dateAndCcv">
        <section class="cardDate">
          <span>VALID THRU</span>
          <input
            type="text"
            v-model="cardInfo.valid"
            placeholder="MM/YY"
            maxlength="5"
          />
        </section>
        <section class="cardCcv">
          <span>CCV</span>
          <input 
            type="text" 
            v-model.number="cardInfo.ccv" 
            placeholder="XXX"
            maxlength="3"
            onkeypress='return event.charCode >= 48 && event.charCode <= 57'
            />
      </section>
    </section>

        <section>
            <p>VENDOR</p>
            <select v-model="cardInfo.vendor">
              <option value="bitCoin">BitCoin INC</option>
              <option value="blockChain">BlockChain</option>
              <option value="evil">Evil Copr</option>
              <option value="ninja">Ninja Bank</option>
            </select>
        </section>
          <button @click="goTo">ADD CARD</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardForm',
      data(){
      return {
          cardInfo: {
            cardNumber: '',
            cardholderName: '',
            valid: '',
            ccv: '',
            vendor: ''
          }
        }
    },
    methods: {
        addValue() {
            this.$emit('cardInfo', this.cardInfo)
        },
        localCard() {
          return localStorage.setItem('newCard', this.cardInfo)
        },
        goTo(){
          this.addValue();
          this.$router.push("/")
        } 
    }
}
</script>

<style scoped lang="scss">
#form {
  display: flex;
  justify-content: center;

.cardForm {
  width: 382px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.3rem;
  input {
    width: 382px;
    height: 56px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    border-radius: 8px;
  }

  select {
    width: 400px;
    height: 56px;
  }

  .dateAndCcv {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    .cardDate {
      input {
        width: 175px;
        height: 56px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
    .cardCcv {
      input {
        width: 175px;
        height: 56px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
  }

  button {
    width: 382px;
    height: 80px;
    margin-top: 2rem;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: black;
    color: white;
    font-size: 2rem;
    margin-top: 0.5rem;
  }
}
}
</style>