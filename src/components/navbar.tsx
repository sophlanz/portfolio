import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import uniqid from 'uniqid';
interface Props{
  style?:string
}
export default function NavBar (props:Props): JSX.Element {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [displayList, setDisplayList] = useState<JSX.Element[]>();
    const display=props.style ? props.style : 'block' ;
  
    
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
      <li key={uniqid()}>
           <Link onClick ={closeModal}  href='/'>HOME</Link>
        </li>,
        <li key={uniqid()}> 
            <Link onClick ={closeModal} href='/projects'>PROJECTS</Link>
        </li >,
        <li key={uniqid()} >
             <Link onClick ={closeModal} href='/about'>ABOUT</Link>
        </li>,
        <li key={uniqid()}>
              <Link onClick ={closeModal} href='/contact'>CONTACT</Link>
        </li>,
        <li key={uniqid()}>
           <Link onClick ={closeModal}  href='/resume'>RESUME</Link>
        </li>
        
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

  return (
    <nav style={{display:display}}>
            <button className="menuToggle" onClick={openModal}>MENU</button>
            <Modal
             isOpen={modalIsOpen}
             onRequestClose={closeModal}
             ariaHideApp={false}
             contentLabel="Modal"
             className="Modal"
             overlayClassName="Overlay"
           >
                <button className="menuToggle"  onClick={closeModal} style={{ position: "absolute", top: "20px", right: "40px", width:"125px"}}>CLOSE</button>
                <div className="right" style={{display: modalIsOpen===true ? "flex" : "none"}}>
                    {displayList}
                </div>
           </Modal> 
    </nav>
  );
};

