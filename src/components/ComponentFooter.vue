<template>
  <footer>
     <!-- <div class="foot2">
        <div class="image">
       
        </div>
      
       <div class="foot2-text1">
   <h1>Subscribe to Newsletter</h1>
   <form action="">
     <input id='input' type="text"><button id="btn">Subscribe</button>
   </form>
   <p>Get healthy news and solutions to your problems from our experts!</p>
  </div>
     </div> -->



     <div class="foot3">

        <div id="foot3-text1">
            <h1>DOCTOR DESNOS</h1>
            <p>Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis amet earum consectetur</p>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>



        </div>


     
     
     <div id="foot3-text1" class="text2">
       
         <h1>Services</h1>
         <p>Medicine</p>
         <p>Neurology</p>
         <p>Eye Care</p>
         <p>Cardiology</p>
         <p>Dental Care</p>
       

        
    </div>
    <div id="foot3-text1">
        <h1>Opening Hours</h1>
        <p>Mon – Tue:   7.00 – 20.00</p>
        <p>wed- thu:   7.00 – 19.00</p>
        <p>Fri:   9.00 – 16.00</p>
        <p>Sun:    9.00 – 13.00</p>

        
    </div>
    <div id="foot3-text1">
      <h1>Contact Information</h1>
      
       <p><i class="fa-thin fa-location-pin"></i>Brooklyn, NY 10036
          United States</p>
        <p><i class="fa-regular fa-envelope"></i>example@example.com</p>
              <p><i class="fa-solid fa-mobile-button"></i>Call Us: +1-800-123-1234</p>
                  
            </div>

  </div> 

  </footer> 
</template>

<script>
export default {

}
</script>

<style scoped lang="css">
    .foot2{
    height: 40vh;
    width: 100%; 
    position: relative;
    z-index: 1;
    
    
}
.image{
    width: 100%;
    height: 368px;
    position: absolute;
    opacity: 0.9;
    background-image: url('../assets/image/hospital-ward-ge3ebe2373_1920.jpg');
    background-size: cover;
   
}
.image::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.7);
}
.foot2-text1{
    position: absolute;
    top: 20%;
    color:#ffffff;
    left: 30%; 
    width: 50%;
}
#btn{
    transform: translateX(-158px);
    height: 42px;
    width: 15%;
    font-size: 15px;
    color:#ffffff;
    background-color: #162B62;
    border: none;
    border-radius: 15px
}
#btn:hover{
    background-color: rgb(57, 143, 202);
    transition: 1s ease-in-out;
}
.foot2-text1>p{
    font-size: 20px;
    padding-top: 15px;
    transform: translate(14%);
   }

#input{
    
 width: 70%;
border-radius: 15px;
border: none;
 height: 45px;
}
.foot2-text1>h1{
    transform: translate(25%);
    font-size: 30px;
    padding-bottom: 15px;
}




.foot3{
    position: relative;
    display: flex;
    width: 100%;
    height: 50vh; 
    background-color :#132031;;
    justify-content: center;  
}
.text2{
    padding-left:5%;
}
#foot3-text1{
    padding-top: 5%;
    width: 20%;  
    line-height: 30px;
    color: #899faf;
}
#foot3-text1>h1{
    padding-bottom: 25px;
}
#foot3-text1>p{
    font-size: 20px;
}
i{
    padding-right: 8px;
    font-size: 18px;
    color: #06b3e5;
}

#to-top{
   width: 50px;
   height: 50px;
   
   background: #132031;
   color:#06B3E5;
   display: flex;
   align-items: center;
   border-radius: 50%;
   position: fixed;
   padding: 8px;
   bottom: 0;
   right:30px;
   opacity:0;
   transition: all .6s;
}

</style>