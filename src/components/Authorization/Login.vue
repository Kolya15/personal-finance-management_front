<template>
    <div class="wrapper-form">
        <h2>Войти</h2>
      <div class="login-form">
        <div class="login-form__input p-input-icon-left">
          <i class="pi pi-user"/>
          <InputText type="text" v-model="user.name" />
        </div>
        <div class="login-form__input p-input-icon-left">
          <i class="pi pi-lock"/>
          <InputText type="password" v-model="user.password" />   
        </div>
      </div>
      <Button label="Вход" @click="signIn()" class="login-form__button p-button-rounded" />  
        <Button label="Регистрация" @click="signUp()" class="login-form__button p-button-secondary p-button-outlined p-button-rounded" /> 
  </div>

</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: "Login",
  components: {
    InputText,
    Button
  },
  data(){
    return{
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    signIn(){
      console.log(this.user.name);
    },
    signUp(){
      console.log('signUp');
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper-form{
    background: red;
    width: 500px;
    padding: 20px 40px;
    border-radius: 8px;
    box-shadow: 0 9px 40px 3px rgb(0 11 34 / 7%);
    background-color: #fff;
  }
    .login-form{
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      &__input{
        width: 100%;
        margin-bottom: 20px;
        input {
          width: 100%;
        }
      }
      &__button {
        margin-top: 20px;
        width: 100%;

      }
    }
</style>