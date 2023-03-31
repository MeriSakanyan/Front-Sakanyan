// function NavBar() {
//    const [btnState, setBtnState] = useState(false)
  
//    function handleClick(){
//       setBtnState(btnState => !btnState)
//    }
// }
//    let toggleClassCheck = btnState ? ' open' : null;

function toggleClass(){
   let menu = document.querySelector(".nav-bar");
   menu.classList.toggle("toggleCls");
   console.log(menu)
 }