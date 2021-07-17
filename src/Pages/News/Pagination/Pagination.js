import classes from "./Pagination.module.scss"
import next_icon from "../../../assets/image/next.svg"
import prev_icon from "../../../assets/image/prev.svg"
import { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, next, prev }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pagsPerPart = 4;
  const [currentPag, setCurrentPag] = useState(1);

  const indexOfLastPag = currentPag * pagsPerPart;
  const indexOfFirstPag = indexOfLastPag - pagsPerPart;
  const currentPags = pageNumbers.slice(indexOfFirstPag, indexOfLastPag);

  const nextPag = [];
  const prevPag = [];
  const nextBtn = [];
  const prevBtn = [];
  if(currentPag !== 1){
    prevPag.push(<div key="prev" className={classes.pagItem} onClick={()=>{ paginate(currentPags[0] - pagsPerPart); setCurrentPag(currentPag - 1)}}>...</div>)
    prevBtn.push(<div
      key="pb"
      className={classes.pagItem}
      onClick={()=>{
        prev();
        currentPage<=currentPags[0]
          ? setCurrentPag(currentPag - 1)
          : console.log("");}} >
      <img alt="prev" src={prev_icon}/>
    </div>)
  }
  if(currentPag <= currentPags.length){
    nextPag.push(<div key="next" className={classes.pagItem} onClick={()=>{ paginate(currentPags[0] + pagsPerPart); setCurrentPag(currentPag + 1)}}>...</div>)
    nextBtn.push(<div 
      key="nb"
      className={classes.pagItem}
      onClick={()=>{
        next();
        currentPage>=currentPags[currentPags.length - 1]
          ? setCurrentPag(currentPag + 1)
          : console.log("");}}>
      <img alt="next" src={next_icon}/>
    </div>)
  }




  return (<div className={classes.Pagination}>
    {prevBtn}
    {prevPag}
    {currentPags.map(number => (
      <div className={classes.pagItem}
        style={{
          backgroundColor: currentPage === number ? "#AB844A" : "#f2f2f2",
          color: currentPage === number ? "#fff" : "#7c7c7c"
        }}
        key={number} onClick={() => paginate(number)}>
        {number}
      </div>
    ))}
    {nextPag}
    {nextBtn}
    
  </div>);
}

export default Pagination;