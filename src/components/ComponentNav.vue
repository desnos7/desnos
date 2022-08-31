<template>
  
  <nav>  
        <div id="logo">
              <h1>Doctor Desnos</h1>
            </div>
            <div class="nav">
            <router-link to="/"><p>HOME</p></router-link>
            <router-link to="/Contactus"><p>CONTACT</p></router-link>     
            <router-link to="/Rendezvous"><p>RENDEZ-VOUS</p></router-link>
        </div>

    </nav>
</template>

<script>
export default {
 name:'ComponentNav'
}
</script>

<style scoped>
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

.nav{
    
    display:flex;
    width: 70%;
    justify-content:space-evenly; 
}

a{
    list-style: none;
    text-decoration: none;
    color: #00a3c8;
    font-size: 15px;
}

</style>