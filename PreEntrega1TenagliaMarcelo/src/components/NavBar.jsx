import CartWidget from "./CartWidget"

function NavBar ({img, name, inicio, muebles, blanqueria, camping}) {

return (

 <>   
  <nav> 
    <div> <img src={img}/> {name} </div>
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