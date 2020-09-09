<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light text-uppercase bg-light">
            <a class="mainTitle" href="/">BeerWorld</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                         <router-link to="/beers" class="nav-link">Home</router-link>
                    </li>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search fa-lg" aria-hidden="true"></i></button>
                </form>
                </ul>
                
            </div>
        </nav> 
    </div> 
</template>

<script>
export default {
    components:{
        
    }
  
    }

</script>

<style scoped>

.header{ 
    background: #f4f5f6;
    transition: all 0.5s ease-out;
    }

.mainTitle {
    color: #5b1201;
    display: inline-block;
    padding-top: 0.325rem;
    padding-bottom: 0.325rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}

.bg-light {
    background-color: #ffffff!important;
}

.navbar-toggler {
    line-height: 0.5;
    border: 1px solid #fafaf8;
    border-radius: .25rem;
    padding: 0;
}

/* Delete the blue shadow from the navabar-toggler */
.navbar-toggler:focus,
.navabar-toggler:active {
    outline: none !important;
    box-shadow: none;
}

.navbar-collapse{
    margin-top:10px;
    text-align: center;
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
}

form{
    margin-left:20%;
}

.form-control{
    width: 80%;
    padding: 2px 12px;
    border: 1px solid #5b1201;
;
}

.btn-outline-success {
    color:#5b1201;
    border:0px;
    margin-left: -20%;
}


/*Media Queries*/
@media (max-width:281px) {
 
}

@media (min-width:539px) and (max-width: 719px) {
  
}



@media (min-width:767px) and (max-width: 1022px) {
 /* .mainTitle {
    margin-left:42%;
    
   } 
   .form-control {
    width: 30%;
    margin-left: 23%;
   } 
   .btn-outline-success {
    margin-left: -10%;
   }*/
}

@media (min-width:1023px) {
        form{
            margin-left:5%;
        }

  /*.mainTitle {
    margin-left:0%;
    margin-right:20px;
   } 
   
   .navbar-nav{
     margin-left: 20%!important;
   }
   form {
    margin-left: 25%;
   } 
   .btn-outline-success {
    margin-left: -25%;
   }
*/
}

@media (min-width: 1365px){
    /*.mainTitle{
        margin-left: 10px;
        margin-right: 13%;
}*/

}




</style>
