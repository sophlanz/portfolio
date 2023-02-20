import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
/* const MenuOpen = createContext<boolean>(false) */

export default function NavBar () {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [displayList, setDisplayList] = useState<JSX.Element[]>([]);
    const listItems: JSX.Element [] = [  
    <li> 
        <Link href='/projects'><span>P</span>R<span>O</span>J<span>E</span>C<span>T</span>S</Link>
    </li>,
    <li >
         <Link href='/about'>A<span>B</span>O<span>U</span>T</Link>
    </li>,
    <li >
          <Link href='/contact'><span>C</span>O<span>N</span>T<span>A</span>C<span>T</span></Link>
    </li>];
    
    const openModal= () => {
        //clear old list
        setDisplayList([])
        setIsOpen(true);
      
    }
    const closeModal =()=> {
        setIsOpen(false);
        setDisplayList([])
    }
    let index: number=0;
    useEffect(() => {
        const interval = setInterval(() => {
          setDisplayList((prevState)=>prevState ? [...prevState,listItems[index]] : [listItems[index]]);
          index++;
          if (index >= listItems.length) {
            clearInterval(interval);
          }
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [modalIsOpen]);
console.log(displayList)

  return (
    <nav>
        <ul>
            <div className="left">
                 <li>
                     <Link href='/'><span>S<span>o</span>phia</span><span>Lanzend<span>o</span>rf</span></Link>
                 </li>
            </div>
            <button className="menuToggle" onClick={openModal}>MENU</button>
            <Modal
             isOpen={modalIsOpen}
             onRequestClose={closeModal}
             ariaHideApp={false}
             contentLabel="Modal"
             className="Modal"
             overlayClassName="Overlay"
           >
                <button className="menuToggle"  onClick={closeModal}>CLOSE</button>
                <div className="right" style={{display: modalIsOpen===true ? "flex" : "none"}}>
                    {displayList}
                </div>
           </Modal> 
        </ul>
    </nav>
  );
};

