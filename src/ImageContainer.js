import waldo1 from './assets/waldo1.jpg'
import Dropdown from './Dropdown';

const ImageContainer = () => {
  const toggleDropdown = () => {
    const ddown = document.querySelector('.Dropdown')
    if (ddown.style.display === "none") {
      ddown.style.display = "block";
    } else {
      ddown.style.display = "none";
    }
  }

  return ( 
    <div>
      <img src={waldo1} alt="Where's Waldo" onClick={() => toggleDropdown()}/>
      <Dropdown />
    </div>
   );
}
 
export default ImageContainer;