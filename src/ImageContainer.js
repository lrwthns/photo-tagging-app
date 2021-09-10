import Dropdown from './Dropdown';
import GameHeader from './GameHeader';

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
    console.log(x);
    console.log(y);
  }

  return ( 
    <div className="ImageContainer" onClick={(e) => toggleDropdown(e)}>
      <GameHeader />
      <img src='' alt="Where's Waldo" className="img-container"/>
      <Dropdown />
    </div>
  );
}
 
export default ImageContainer;