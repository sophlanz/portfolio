import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
/* const MenuOpen = createContext<boolean>(false) */

export default function NavBar () {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [displayList, setDisplayList] = useState<JSX.Element[]>([]);
  
    
    const openModal= () => {
        //clear old list
        setDisplayList([])
        setIsOpen(true);
      
    }
    const closeModal =()=> {
        setIsOpen(false);
        setDisplayList([])
    }
    const listItems: JSX.Element [] = [  
      <li>
           <Link onClick ={closeModal}  href='/'>HOME</Link>
        </li>,
        <li> 
            <Link onClick ={closeModal} href='/projects'>PROJECTS</Link>
        </li>,
        <li >
             <Link onClick ={closeModal} href='/about'>ABOUT</Link>
        </li>,
        <li >
              <Link onClick ={closeModal} href='/contact'>CONTACT</Link>
        </li>,
        
        ];
    let index: number=0;
    useEffect(() => {
        const interval = setInterval(() => {
          setDisplayList((prevState)=>prevState ? [...prevState,listItems[index]] : [listItems[index]]);
          index++;
          if (index >= listItems.length) {
            clearInterval(interval);
          }
        }, 250);
    
        return () => {
          clearInterval(interval);
        };
      }, [modalIsOpen]);
console.log(displayList)

  return (
    <nav>
        <ul>
          {/*   <div className="left">
                 <li>
                     <Link href='/'><span>Sophia</span>Lanzendorf</Link>
                 </li>
            </div> */}
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

