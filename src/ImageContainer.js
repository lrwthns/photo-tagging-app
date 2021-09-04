import waldo1 from './assets/waldo1.jpg'
import Dropdown from './Dropdown';

const ImageContainer = () => {
  const toggleDropdown = (e) => {
    const ddown = document.querySelector('.Dropdown');
    let x = e.pageX;
    let y = e.pageY;
    ddown.style.left = `${x - 45}px`;
    ddown.style.top = `${y - 45}px`;
    if (ddown.style.display === "none") {
      ddown.style.display = "grid";
    } else {
      ddown.style.display = "none";
    }
  }

  return ( 
    <div>
      <img src={waldo1} alt="Where's Waldo" onClick={(e) => toggleDropdown(e)}/>
      <Dropdown />
    </div>
   );
}
 
export default ImageContainer;