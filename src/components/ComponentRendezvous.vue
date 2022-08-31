<template>
  
<div v-if="showModal">
   <ComponentFormulaire @connected="showModal = false"/>
</div>
      
      
  <div class="body">
  <h1>Planifier une consultation</h1>

<form action="">
  <p>Êtes-vous déjà patient(e) à notre clinique?</p>
 
 <div class="radio">
        <div>
          <input type="radio" name="NON" value="Non">
          <label>Non</label>
        </div>
    
        <div >
          <input type="radio" name="Oui" value="Oui">
          <label >Oui</label>
        </div>
</div>


<div class="contact">
      <input type="number" placeholder="Telephone"  v-model="number">
      <input type="text" placeholder="courriel" v-model="email">
      <input type="numder"  placeholder="Age" v-model="age">
</div>
<p>Nom et prénom du parent si patient mineur</p>
<div class="parent">
   
   <input type="text" placeholder=" Nom parent*" v-model="naneparent">
   <input type="text" placeholder="Prenom parent*" v-model="firstnameparent">
</div>
<div class="calendrier">
  <p>À partir de quelle date souhaitez-vous un rendez-vous?</p>
  <input type="date" v-model="calendrier" >
</div>
<div class="Select">
  <p>Choisissez votre orthodontiste</p>
  <select name="pets" id="pet-select" v-model="docter">
    <option value="">-- -- --</option>
    <option value="Dr desnos">Dr desnos</option>
    <option value="Dr ramos">Dr ramos</option>
    
</select>
</div>

  <p>Quel est le moment de la journée qui vous convient le mieux?</p>
  <div class="checkbox">
  <div class="check">
    <input type="checkbox" id="scales" name="Matin">
    <label >Matin</label>
  </div>

  <div class="check">
    <input type="checkbox" id="horns" name="midi">
    <label >Midi</label>
  </div>
  <div class="check">
    <input type="checkbox" id="horns" name="Après-midi">
    <label >Après-midi</label>
  </div> 
</div>
<div class="textarea">
   <input type="textarea" placeholder="Raison de la visite">
   <p>Les champs marqués d'un astérisque (*) sont obligatoires.</p>
</div>

   <button>Envoyer maintenant</button>
</form>
</div>

</template>

<script>
   import ComponentFormulaire from '../components/ComponentFormulaire.vue';
    
export default {
   data(){
      return{
         showModal:true
      }
    
   },

   components:{
      ComponentFormulaire
   }
      
   

}
</script>

<style scoped >
        *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.body{
   
    background-color: #00035a!important;
    color: #ffff;
}

h1{
    
    text-align: center;
    margin-bottom: 5%;
}
 form{
    width: 65%;
    margin: 0 auto;
 
   
 }
 p{
    font-size: 20px;
    padding-bottom:25px ;
    padding-top: 20px;
 }
 .radio{
   display: flex;
   padding-bottom: 20px;
   gap: 3%;    
 }


 .name{
    display: flex;
    gap: 3%;
    padding-bottom: 30px;
 }
 .name>input{
    width: 50%;
    padding: 15px; 
    background-color: hsla(0,0%,100%,.2);
    border: none;
 }
 .contact{
    display: flex;
    gap: 3%;
    padding-bottom: 25px;
 }
 .contact>input{
    width: 50%;
    padding: 15px; 
    background-color: hsla(0,0%,100%,.2);
    border: none;
 }
 .parent{
    padding-top: 25px;
    display: flex;
    gap: 3%;
    padding-bottom: 25px;
 }
 .parent>input{
    width: 50%;
    padding: 15px;
    background-color: hsla(0,0%,100%,.2);
    border: none;
 }
 .calendrier>input{
    width: 20%;
    padding: 10px;
    background-color: hsla(0,0%,100%,.2);
    border: none;
 }
 .Select>select{
    width: 20%;
    padding: 10px;
    background-color: hsla(0,0%,100%,.2);
    border: none;
 }
 .checkbox{
    display: flex;
    padding-bottom: 25px;
    gap: 4%;

 }
 .check>label{
    font-size: 20px;
 }
 .textarea>input{
 width: 90%;
padding: 10%;
background-color: hsla(0,0%,100%,.2);
border: none;
   
 }
 .textarea>p{
    font-size: 14px;
    
 }
 button{
    border: 2px solid red;
    background-color: #00035a;
    width: 20%;

    padding: 17px;
    border-radius: 5px;
    margin-bottom: 35px;
    color:red;
    font-size: 15px;
 }

</style>