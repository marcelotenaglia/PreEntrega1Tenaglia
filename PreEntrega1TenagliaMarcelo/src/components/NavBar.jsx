import CartWidget from "./CartWidget"

function NavBar ({img, inicio, muebles, blanqueria, camping}) {

return (

 <>   
  <nav class="nav"> 
    <div class="logo"> <img src={img}/><div class="name">Muebleria Rollan</div></div>
    <button> {inicio} </button>
    <button> {muebles} </button>
    <button> {blanqueria} </button>
    <button> {camping} </button>
    <CartWidget/>
  </nav>
 </>

)

}

export default NavBar