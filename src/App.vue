<template>

        
      <div >
      <router-view></router-view>
      </div>
     
        
   
</template>

<script>
import axios from 'axios'
export default {
      
     data(){ 
           return{
       wishes:[
      {name:'Bing',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Ashita',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Mansi',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Prakhar',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Subhashini',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Soumya',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Shivani',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'H '},
      {name:'Tarun',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Yoshit',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Vidhi',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Priyanshi',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Saurabh',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Dikshita',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Yogesh',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      {name:'Arpit',img:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/24d61276814345.5c77ebfb93a4d.jpg',wish:'Happy Birthday Sneha I Dance Better than I Drive. I am the lead Dancer for a Top Shelf Dance Crew '},
      ]

      }
     },
//         created(){
        
//         axios.post('https://hbds-65798.firebaseio.com/wishes.json',this.wishes)
//         .then(res=> console.log(res))
//         .console.error(error=>console.log(error))
      
//     }
}
</script>

<style  >

body{
  
  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url("https://www.nme.com/wp-contentt/uploads/2019/08/25th-anniversary-of-Friends-in-2019.jpg");
  min-height: 100%; 
  width:100%;
  height: auto;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
  font-family: Covered By Your Grace;
}




</style>