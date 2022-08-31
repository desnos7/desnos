<template>
  
  <header>
        <img id='img1' src="../assets/image/hospital-ward-ge3ebe2373_1920.jpg" alt="">
       
        <div class="text">
           
            <h1>soyez attentif à votre santé</h1>
            <button>Demander un rendez-vous</button>
        </div>

    </header>
    <div class='box'>
      <div id="box1">
         <div class="card">
          <div id="card1">
              <img src="../assets/image/312139.svg" alt="">
              <h1>Doctors</h1>
            </div>
           <p>Recherchez un expert de la clinique Dr.Carter par spécialité, maladie, condition, expertise ou nom de famille du médecin.</p>
           <button>TROUVER UN MEDECIN</button>

          </div>
          <div class="card" id="color">
            <div id="card1"><img src="../assets/image/312139.svg" alt=""><h1>Doctors</h1></div>
             <p>Recherchez un expert de la clinique Dr.Carter par spécialité, maladie, condition, expertise ou nom de famille du médecin.</p>
             <button>TROUVER UN MEDECIN</button>
  
          </div>
          <div class="card" id="color1">
            <div id="card1"><img src="../assets/image/312139.svg" alt=""> <h1>Doctors</h1></div>
             <p>Search for Dr.Carter Clinic expert by specialty, disease, conditione, expertise, or doctor’s last name.</p>
             <button>FIND A DOCTOR</button>
  
           </div>
        </div>
   </div>
   <!-- body 1 -->

   <div class="box1">
            <img id='img' src="../assets/image/Medical-team.png" alt="">

            <div class="text1">
                <h1>Bienvenue dans notre Clinique</h1>
                <p>PROFESSIONNELS MÉDICAUX</p>
                <h2>“Nous offrons des services uniques. Notre objectif est de vous offrir ce qu'il faut pour rester en bonne santé et indépendant”</h2>

            </div>
   </div>

<!-- body 2 -->
 <div class="box3">
 <div id="box3">
 <div class="box3_card">
  <h3>VOUS ÊTES AMOUREUX D'ESPOIR ET VOULEZ VOUS DÉMARQUER</h3>

 <button>TROUVER UN MEDECIN</button> <button>TROUVER UN MEDECIN</button> 
</div> 
  </div>
</div>



<!-- body 3 -->
 <div class="box5">
   <div class="box5-item">
      <h1>Head of Departments</h1>
      <p>ÉQUIPE DE PROFESSIONNELS</p>
    </div>
  <div class="box5-item1">
      <div class='card-box4'>
       <div>
        <img id='img2' src="../assets/image/rian-ramirez-rm7rZYdl3rY-unsplash.jpg" alt=""></div>
       <div>
       <h1>Dr. Andrew Cross</h1>
       <p>Nous avons une équipe de spécialistes dévoués dans leurs domaines respectifs. C'est pourquoi nous offrons à chaque patient les meilleurs soins de santé.</p>
      </div>

      </div>
      <div class='card-box4'>
        <div><img id='img2' src="../assets/image/usman-yousaf-pTrhfmj2jDA-unsplash.jpg" alt=""></div>
        <h1>Dr. Andrew Cross</h1>
        <p>We have a team of the dedicated specialists in their respective fields. That's why we offer every patient the best health care.</p>
 
       </div>
       <div class='card-box4'>
        <div><img id='img2' src="../assets/image/bruno-rodrigues-279xIHymPYY-unsplash.jpg" alt=""></div>
        <h1>Dr. Andrew Cross</h1>
        <p>We have a team of the dedicated specialists in their respective fields. That's why we offer every patient the best health care.</p>
 
       </div>
   </div>

 </div> 
</template>

<script>
export default {
    name:'ComponentHome'

}
</script>

<style scoped lang="css">
    /* header and nav */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header{
    width: 100%;
    height: 80vh;
}
#img1{
    width: 100%;
    height: 80vh;
    position: relative;
    object-fit: cover;
}
nav{
    width: 99%;
    position: absolute;
    display:flex;
    top: 0;
    justify-content: space-between;
    height: 60px;
    background-color: white;
    text-align: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    color: #00a3c8;
    
  
}
#logo {
    width: 40%;
 align-items: center;
 text-align: center;
}
#color{
    background-color: #2B56B8;
    padding: 18px;
    
}
#color1{
    background-color: #162b62;
    padding: 18px;
}


.text{
    width: 550px;
    position: absolute;
    top:25%;
    font-size: 28px;
    left: 25%;
    color:white;
}
p{
    font-size: 14px;
    
}
.text>button{
color:white;
font-size: 20px;
width: 300px;
height: 50px;
background-color: #06B3E5;
border: none;
border-radius: 15px;

}
.text>button:hover{
 background-color: transparent;
 border:3px solid #06B3E5;
 transition: 1s ease-in-out;
}
.box{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25vh;
    background-color: #ffffff80;
      
}
#box1 {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 5px;
    width: 60%;
    
}
.card{
    width: 350px;
    height: 300px;
    background-color: rgb(35, 130, 196);
    color:white;
    font-size: 15px;
    padding: 18px;

}
#card1>h1{
 padding-bottom: 15px;
 
}
.card>p{
    padding-bottom: 19px;
    font-size: 21px;
   }

.card>button{
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    width: 200px;
    height: 35px;
    background-color: rgb(57, 143, 202);
}
.card>button:hover{
    border: 2px solid white;
}
#card1{
    display: flex;

}
#card1>img{
    width: 15px;
    height: 20px;
}

.text1{
    position: absolute;
    top: 25%;
    left: 15%;
    width: 20%;
    height: 500px;
    font-size: 20px;
    color: #0A0000;
    
}
.box1{
    position: relative;
}
.text1>p{
    line-height: 50px;
    color: #06B3E5;
    font-size: 15px;
}
.text1>h2{
    padding-top:35px ;
    font-size: 25px;
}

#img{
    width: 100%;
    height:65vh;
}

/* body 3 */
.box5-item{
    height: 17vh;
    
}
.box5-item>h1{
    padding-top: 45px;
  padding-left: 41%;
}
.box5-item>p{
    padding-left: 45%;
    font-size: 15px;
    color: #06B3E5;
    
  }
.box5-item1{ 
  display: flex;
  justify-content: center; 
  padding-left: 50px;
  gap: 2%;  
  
}
.card-box4{
    width: 400px;
    overflow: hidden;
    height: 440px;
    text-align: center;
    align-items: center;
}

 
#img2{
    border-radius: 50%;
    width: 220px;
    height: 220px;
    object-fit:cover ;

}
/* body 2 */

.box3{
background-image: url(../assets/image/image-2.jpeg);
position: relative;
height: 400px;
    padding: 90px 0px;
    color: #ffffff;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
   
}
#box3{
   
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(109, 209, 232, 0.9);
    z-index: 0;

}
.box3_card{
    text-align: center;
    padding-top:5%;
    line-height: 55px;
}
.box3_card>button{
    padding: 25px;
    border-radius: 30px;
    margin-left: 2%;
    border: 2px solid #06B3E5;
}

</style>