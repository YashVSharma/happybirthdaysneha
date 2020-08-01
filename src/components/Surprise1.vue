<template>
<div>

 <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    

      
      <a class="navbar-brand" href="#" target="_blank">
        <h1 >The one With<span class="strong"> S.N.E.H.A</span></h1>
       
      </a>

   
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

       
        <ul class="navbar-nav ml-auto">
         <li class="nav-item active">
        <router-link to="/about" class="nav-link" ><a> <h2> About    </h2> </a></router-link>
      </li>
     <li class="nav-item active">
        <router-link to="/wishes" class="nav-link" ><a> <h2>  Wishes </h2> </a></router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/memories" class="nav-link" ><a><h2>    Memories   </h2> </a></router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/surprise" class="nav-link" ><a><h2>   Gift !</h2> </a></router-link>
      </li>
        </ul>

        
        

      </div>

    
  </nav>

   <div class="container-fluid c111" style="text-align:center;margin-bottom:2%">
    <h1 style="color:white;font-size:100px;">SURPRISSSSEEEEE !!!</h1>
    </div> 
     <div class="container" style="text-align:center;margin-bottom:2%">
    <h1 style="color:white;font-size:40px;">No.. You Got the password wrong</h1>

    <form style="margin-top:50px;font-size:30px;">
      <h2 style="color:white;">Hint:</h2>
        <label style="color:#d9832e;">Enter what you entered with your Surname -</label>
        
        <div class="b11">
        <button  @click="submitt">Try Again</button>
        </div>
      </form>
    </div>

  

 

</div>
  
</template>

<script>
    export default{
        data(){
            return{
                     password:null,
                  }
        },
       
        methods:{
            
            submitt(){
              
                this.$router.push('/surprise')
              
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Nothing+You+Could+Do&display=swap');

body{
  
  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url("https://www.nme.com/wp-content/uploads/2019/08/25th-anniversary-of-Friends-in-2019.jpg");
  min-height: 100%; 
  width:100%;
  height: auto;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
  font-family: Covered By Your Grace;

}
.c111{
   margin-top: 10%;
 }
.b11{
margin-top: 5%;
}
 @media screen and (max-device-width: 768px) {
 .c111{
   margin-top: 30%;
 }}


@media (min-device-width: 600px) and (max-device-width: 600px) {
            .navbar:not(.top-nav-collapse) {
                background: #1C2331!important;
            }
        }
.view,body,html{height:100%}
.navbar{background-color:rgba(0,0,0,.2)}
.page-footer,.top-nav-collapse
{background-color:#1C2331
}@media only screen and (max-device-width:600px){.navbar{background-color:#1C2331}}

</style>