import React, {useState,createContext} from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
/* const MenuOpen = createContext<boolean>(false) */

export default function NavBar () {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    
    const openModal= () => {
        setIsOpen(true);
    }
    const closeModal =()=> {
        setIsOpen(false);
    }
 
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
                      <li>
                           <Link href='/projects'><span>P</span>R<span>O</span>J<span>E</span>C<span>T</span>S</Link>
                       </li>
                       <li>
                           <Link href='/about'>A<span>B</span>O<span>U</span>T</Link>
                       </li>
                       <li>
                           <Link href='/contact'><span>C</span>O<span>N</span>T<span>A</span>C<span>T</span></Link>
                       </li>
                </div>
           </Modal> 
        </ul>
    </nav>
  );
};

