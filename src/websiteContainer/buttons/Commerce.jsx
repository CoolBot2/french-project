
import React, { useState } from 'react'
import pics from '../../redux/DataB'


import Modal from 'react-modal';


import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../../redux/Actions';
const Commerce = () => {
  const {elements} = useSelector(state => state )
  console.log(elements);
  const el = elements.find(el=>el.ctg==="commerce")
  console.log(el);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  const [text, setText] = useState("")
  const handleChange = (e) => setText(e.target.value)
  const dispatch = useDispatch()


 const handleAdd = () => {
    dispatch(Add(el.id,text))
    closeModal()
    
  }
  return (
    <div>
     <button  onClick={()=>openModal()} >Add</button>
     <Modal
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
    
     >
       <input type="text" value={text} onChange={handleChange} />
       <button onClick={()=>handleAdd()}>confirm</button>
       <button onClick={()=>closeModal()}>cancel</button>
     </Modal>
      
      {
        el.src.map(img=>
          <img height="200" width="200" src={img} alt="" />
          )
      }
      
    </div>
  )
}

export default Commerce
// const dispatch = useDispatch()
// return (
//   <div>
  
//   {pics.map(el=><div>
//     <img src={el.src} alt="" />
//     <h3> {el.title}</h3>
//   </div>)}
// </div>