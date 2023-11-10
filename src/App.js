import './App.css';
import React,{useState} from 'react';

function App() {
  const [input,setInput]=useState("");
  
  function compute() {
    const final=eval(input);
    setInput(final);
  }
  
  function clear(){
    setInput("");
  }

  const btns=[
    {
      key:'1',
      val:'1'
    },

    {
      key:'2',
      val:'2'
    },

    {
      key:'3',
      val:'3'
    },

    {
      key:'4',
      val:'4'
    },

    {
      key:'5',
      val:'5'
    },

    {
      key:'6',
      val:'6'
    },

    {
      key:'7',
      val:'7'
    },

    {
      key:'8',
      val:'8'
    },

    {
      key:'9',
      val:'9'
    },

    {
      key:'10',
      val:'0'
    },

    {
      key:'11',
      val:'.'
    },

    {
      key:'12',
      val:'-'
    },

    {
      key:'13',
      val:'+'
    },

    {
      key:'14',
      val:'*'
    },

    {
      key:'15',
      val:'/'
    },

    {
      key:'16',
      val:'C'
    },

    {
      key:'17',
      val:'='
    },
  ];

  const check=(key1,val1)=>{
    if(val1==="C"){
      return <div key={key1}><input type="button" value={val1} onClick={clear} /></div>
    }else if(val1==="="){
      return <div key={key1}><input type="button" value={val1} onClick={compute} /></div>
    }else{
      return <div key={key1}><input type="button" value={val1} onClick={e=>setInput(input+e.target.value)} /></div>
    }
  };
  
  return (
    
    <>
      <section id='result-section'>
        <div id='result-div'>
          <input type="text" value={input}/>
        </div>
      </section>
    
      <section id='btn-section'>
        <div className="btn">
            {btns.map(list=>
              {return check(list.key,list.val)}
           )}
        </div>
      </section>
    </>
  );
}

export default App;
