import Icon from "./Icon"
import Stopwatch from "./Stopwatch"

const GameHeader = () => {
  return ( 
    <div className="GameHeader">
    <Icon imgName="waldo-icon"></Icon>
    <Icon imgName="wenda-icon"></Icon>
    <Stopwatch></Stopwatch>
    </div> 
  );
}
 
export default GameHeader;