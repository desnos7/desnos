<template>
    <div class="card"></div>
       <div  class="wrapper"> 
        <div v-if="!login" class="form-container">
          <div class="slide-controls">
            <label for="login" class="slide login">Signup</label>  
            
          </div>
          <div class="form-inner">
            <form>
                <div class="field">
                <input type="text" placeholder="name" v-model='name' >
              </div>
              <div class="field">
                <input type="text" placeholder="firstname" v-model='firstname'  >
              </div>
              <div class="field">     
                <input type="email" placeholder="Email Address" v-model='email' >
              </div>
              <div class="field">
                <input type="password" placeholder="Password" v-model='password' >
              </div>
              
              <div class="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit"  @click.prevent="inscription" value="Signup">
              </div>
              <div class="signup-link">
                Not a member? <a @click="()=>login=true"
                >Login now</a>
              </div>
            </form>
            
          </div>
        </div>
      </div>
      <div class="wrapper">
        
        <div v-if="login" class="form-container">
          <div class="slide-controls">
            <label for="login" class="slide login">Login</label>  
            
          </div>
          <div class="form-inner">
            <form>
              <div class="field">     
                <input type="email" placeholder="Email Address" v-model='email' >
              </div>
              <div class="field">
                <input type="password" placeholder="Password" v-model='password' >
              </div>
              
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" @click.prevent="connexion" value="Login">
              </div>
              <div class="signup-link">
                Not a member? <a @click="()=>login=false">Signup now</a>
              </div>
            </form>
            
          </div>
        </div>
      </div>

    
</template>

<script>
import { connexion, inscription } from '../lib/firebaseFunc'


export default {
    name:'ComponentFormulaire',
    data(){
        return{
            name:"",
            firstname:'',
            email:'',
            password:'',
             login: true,           
        }
    },
    methods:{
        async inscription(){
           let signup ={
                name:this.name,
                firstname:this.firstname,
                password:this.password,
                email:this.email
            
            }   
            await inscription(signup, (success)=>{
              console.log('success')
              success?this.login=true:''
            })     
        },
        
        async connexion(){
          let login ={
            password:this.password,
                email:this.email
          }
          await connexion(login, (response)=>{
            console.log(response)
            if (response.user){
              console.log("success")
              this.$emit("connected")
            } else{ // dans ou il y a une erruer
              console.log(response.error)
            }
          })


        }
     
        
    }
}
</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.card{
  background-color: rgba(9, 1, 1, 0.5);
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
}

html,body{
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  background-color: #00035a!important;
}
::selection{
    background: #00035a!important;
  color: #fff;
}

.wrapper{
  position: absolute;
  margin: 10%;
  margin-left:35%;
  width: 390px;
  background: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  z-index: 2;
}
.wrapper .title-text{
  display: flex;
  width: 200%;
}
.wrapper .title{
  width: 50%;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}
.wrapper .slide-controls{
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  overflow: hidden;
  margin: 30px 0 10px 0;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
.slide-controls .slide{
  height: 100%;
  width: 100%;
 
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.6s ease;
}
.slide-controls label.signup{
  color: #000;
}

input[type="radio"]{
  display: none;
}
#signup:checked ~ .slider-tab{
  left: 50%;
}
#signup:checked ~ label.signup{
  color: #fff;
  cursor: default;
  user-select: none;
}
#signup:checked ~ label.login{
   color: #00035a!important;
}
#login:checked ~ label.signup{
    color: #00035a!important;
}
#login:checked ~ label.login{
  cursor: default;
  user-select: none;
}
.wrapper .form-container{
  width: 100%;
  overflow: hidden;
}
.form-container .form-inner{
  display: flex;
  width: 200%;
  
}
.form-container .form-inner form{
  width: 50%;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}
.form-inner form .field{
  height: 50px;
  width: 100%;
  margin-top: 20px;
}
.form-inner form .field input{
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  font-size: 17px;
  transition: all 0.3s ease;
}
.form-inner form .field input:focus{
  border-color: #00035a!important;
  /* box-shadow: inset 0 0 3px #fb6aae; */
}
.form-inner form .field input::placeholder{
  color: #999;
  transition: all 0.3s ease;
}
form .field input:focus::placeholder{
  color: #b3b3b3;
}
.form-inner form .pass-link{
  margin-top: 5px;
}
.form-inner form .signup-link{
  text-align: center;
  margin-top: 30px;
}
.form-inner form .pass-link a,
.form-inner form .signup-link a{
    color: #00035a!important;
  text-decoration: none;
}
.form-inner form .pass-link a:hover,
.form-inner form .signup-link a:hover{
  text-decoration: underline;
}
form .btn{
  height: 50px;
  width: 100%;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
form .btn .btn-layer{
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: #00035a!important;
  border-radius: 5px;
  transition: all 0.4s ease;;
}
form .btn:hover .btn-layer{
  left: 0;
}
form .btn input[type="submit"]{
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
  background: none;
  border: none;
  color: #fff;
  padding-left: 0;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}

</style>