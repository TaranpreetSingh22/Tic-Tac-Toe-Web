import './App.css';
import React,{useState} from 'react';

var flag="X";
var col1='';
var col2='';
var col3='';
var col4='';
var col5='';
var col6='';
var col7='';
var col8='';
var col9='';
var input1='';
var input2='';
var input3='';
var input4='';
var input5='';
var input6='';
var input7='';
var input8='';
var input9='';
var ms=500;
var ans;

function App(props) {
  const [dis1,setDis1]=useState(false);
  const [dis2,setDis2]=useState(false);
  const [dis3,setDis3]=useState(false);
  const [dis4,setDis4]=useState(false);
  const [dis5,setDis5]=useState(false);
  const [dis6,setDis6]=useState(false);
  const [dis7,setDis7]=useState(false);
  const [dis8,setDis8]=useState(false);
  const [dis9,setDis9]=useState(false);
  
  function check1() {
   if (((input1==="X")&&(input2==='X')&&(input3==='X'))||((input1==='X')&&(input5==='X')&&(input9==='X'))||((input1==='X')&&(input4==='X')&&(input7==='X'))) {
       setTimeout(function() {
        ans=window.confirm('X Won');
        if(ans===true){
          clear();
        }
       }, ms);
    }
    
    else if (((input1==="O")&&(input2==='O')&&(input3==='O'))||((input1==='O')&&(input5==='O')&&(input9==='O'))||((input1==='O')&&(input4==='O')&&(input7==='O'))) {
       setTimeout(function() {
        ans=window.confirm('O Won');
        if(ans===true){
          clear();
        }
       }, ms);
    }
     else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
        ans=window.confirm('Its A Tie');
        if(ans===true){
          clear();
        }
       }, ms);
    }
    
  }
  
  function check2() {
    if (((input1==="X")&&(input2==='X')&&(input3==='X'))||((input2==='X')&&(input5==='X')&&(input8==='X'))) {
       setTimeout(function() {
         ans=window.confirm('X Won');
         if(ans===true){
          clear();
        }
       }, ms);
     }
     
   else if (((input1==="O")&&(input2==='O')&&(input3==='O'))||((input2==='O')&&(input5==='O')&&(input8==='O'))) {
       setTimeout(function() {
         ans=window.confirm('O Won');
         if(ans===true){
          clear();
        }
       }, ms);
     }
     
    else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
        ans= window.confirm('Its A Tie');
        if(ans===true){
          clear();
        }
       }, ms);
    }
  }
  
  function check3() {
    if (((input1==="X")&&(input2==='X')&&(input3==='X'))||((input3==='X')&&(input5==='X')&&(input7==='X'))||((input3==='X')&&(input6==='X')&&(input9==='X'))) {
      setTimeout(function() {
      ans=  window.confirm('X Won');
      if(ans===true){
          clear();
        }
      }, ms);
    }
    
    else if (((input1==="O")&&(input2==='O')&&(input3==='O'))||((input3==='O')&&(input5==='O')&&(input7==='O'))||((input3==='O')&&(input6==='O')&&(input9==='O'))) {
      setTimeout(function() {
      ans=  window.confirm('O Won');
      if(ans===true){
          clear();
        }
      }, ms);
    } 
      
    else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
         ans=window.confirm('Its A Tie');
         if(ans===true){
          clear();
        }
       }, ms);
    }
  }
  
  function check4() {
    if (((input1==="X")&&(input4==='X')&&(input7==='X'))||((input4==='X')&&(input5==='X')&&(input6==='X'))) {
      setTimeout(function() {
       ans= window.confirm('X Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
    
   else if (((input1==="O")&&(input4==='O')&&(input7==='O'))||((input4==='O')&&(input5==='O')&&(input6==='O'))) {
      setTimeout(function() {
       ans= window.confirm('O Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
      
    else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
        ans= window.confirm('Its A Tie');
        if(ans===true){
          clear();
        }
       }, ms);
    }
  }
  
  function check5() {
    if (((input1==="X")&&(input5==='X')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input7==='X'))||((input2==='X')&&(input5==='X')&&(input8==='X'))||((input4==='X')&&(input5==='X')&&(input6==='X'))) {
      setTimeout(function() {
        ans=window.confirm('X Won');
        if(ans===true){
          clear();
        }
      }, ms);
    }
    
    else if (((input1==="O")&&(input5==='O')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input7==='O'))||((input2==='O')&&(input5==='O')&&(input8==='O'))||((input4==='O')&&(input5==='O')&&(input6==='O'))) {
      setTimeout(function() {
       ans= window.confirm('O Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
      
     else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
         ans=window.confirm('Its A Tie');
         if(ans===true){
          clear();
        }
       }, ms);
    }
  }
  
  function check6() {
    if (((input3==="X")&&(input6==='X')&&(input9==='X'))||((input4==='X')&&(input5==='X')&&(input6==='X'))) {
      setTimeout(function() {
       ans= window.confirm('X Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
    
   else if (((input3==="O")&&(input6==='O')&&(input9==='O'))||((input4==='O')&&(input5==='O')&&(input6==='O'))) {
      setTimeout(function() {
       ans= window.confirm('O Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
      
     else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
        ans= window.confirm('Its A Tie');
        if(ans===true){
          clear();
        }
       }, ms);
    }
  }
  
  function check7() {
    if (((input1==="X")&&(input4==='X')&&(input7==='X'))||((input7==='X')&&(input5==='X')&&(input3==='X'))||((input7==='X')&&(input8==='X')&&(input9==='X'))) {
      setTimeout(function() {
        ans=window.confirm('X Won');
        if(ans===true){
          clear();
        }
      }, ms);
    }
    
    else if (((input1==="O")&&(input4==='O')&&(input7==='O'))||((input7==='O')&&(input5==='O')&&(input3==='O'))||((input7==='O')&&(input8==='O')&&(input9==='O'))) {
      setTimeout(function() {
       ans= window.confirm('O Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
      
    else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
        ans= window.confirm('Its A Tie');
        if(ans===true){
          clear();
        }
       }, ms);
    }
  }
  
  function check8() {
    if (((input2==="X")&&(input5==='X')&&(input8==='X'))||((input7==='X')&&(input8==='X')&&(input9==='X'))) {
      setTimeout(function() {
       ans= window.confirm('X Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
    
    else if (((input2==="O")&&(input5==='O')&&(input8==='O'))||((input7==='O')&&(input8==='O')&&(input9==='O'))) {
      setTimeout(function() {
       ans= window.confirm('O Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
      
     else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
        ans= window.confirm('Its A Tie');
        if(ans===true){
          clear();
        }
       }, ms);
    }
  }
  
  function check9() {
    if (((input7==="X")&&(input8==='X')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='X'))) {
      setTimeout(function() {
      ans=  window.confirm('X Won');
      if(ans===true){
          clear();
        }
      }, ms);
    }
    
    else if (((input7==="O")&&(input8==='O')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='O'))) {
      setTimeout(function() {
       ans= window.confirm('O Won');
       if(ans===true){
          clear();
        }
      }, ms);
    }
      
    else if(((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input1==='X')&&(input2==='O')&&(input3==='O'))||((input1==='X')&&(input2==='O')&&(input3==='X'))||((input1==='X')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='X')&&(input3==='X'))||((input1==='O')&&(input2==='X')&&(input3==='O'))||((input1==='O')&&(input2==='O')&&(input3==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input5==='O')&&(input9==='O'))||((input3==='X')&&(input5==='O')&&(input9==='X'))||((input3==='X')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='X')&&(input9==='X'))||((input3==='O')&&(input5==='X')&&(input9==='O'))||((input3==='O')&&(input5==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X')))||
     (((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X'))))&&
     ((((input4==='X')&&(input5==='O')&&(input6==='O'))||((input4==='X')&&(input5==='O')&&(input6==='X'))||((input4==='X')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='X')&&(input6==='X'))||((input4==='O')&&(input5==='X')&&(input6==='O'))||((input4==='O')&&(input5==='O')&&(input6==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))&&
     ((((input1==='X')&&(input4==='O')&&(input7==='O'))||((input1==='X')&&(input4==='O')&&(input7==='X'))||((input1==='X')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='X')&&(input7==='X'))||((input1==='O')&&(input4==='X')&&(input7==='O'))||((input1==='O')&&(input4==='O')&&(input7==='X')))||
     (((input3==='X')&&(input5==='O')&&(input7==='O'))||((input3==='X')&&(input5==='O')&&(input7==='X'))||((input3==='X')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='X')&&(input7==='X'))||((input3==='O')&&(input5==='X')&&(input7==='O'))||((input3==='O')&&(input5==='O')&&(input7==='X')))||
     (((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input2==='X')&&(input5==='O')&&(input8==='O'))||((input2==='X')&&(input5==='O')&&(input8==='X'))||((input2==='X')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='X')&&(input8==='X'))||((input2==='O')&&(input5==='X')&&(input8==='O'))||((input2==='O')&&(input5==='O')&&(input8==='X'))))&&
     ((((input7==='X')&&(input8==='O')&&(input9==='O'))||((input7==='X')&&(input8==='O')&&(input9==='X'))||((input7==='X')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='X')&&(input9==='X'))||((input7==='O')&&(input8==='X')&&(input9==='O'))||((input7==='O')&&(input8==='O')&&(input9==='X')))||
     (((input1==='X')&&(input5==='O')&&(input9==='O'))||((input1==='X')&&(input5==='O')&&(input9==='X'))||((input1==='X')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='X')&&(input9==='X'))||((input1==='O')&&(input5==='X')&&(input9==='O'))||((input1==='O')&&(input5==='O')&&(input9==='X')))||
     (((input3==='X')&&(input6==='O')&&(input9==='O'))||((input3==='X')&&(input6==='O')&&(input9==='X'))||((input3==='X')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='X')&&(input9==='X'))||((input3==='O')&&(input6==='X')&&(input9==='O'))||((input3==='O')&&(input6==='O')&&(input9==='X'))))) {
      setTimeout(function() {
        ans= window.confirm('Its A Tie');
        if(ans===true){
          clear();
        }
       }, ms);
    }
  }
  
  function change1() {
    input1=flag;
    if (flag==="X") {
      flag="O";
      setDis1(true);
      col1='red';
    }
    else {
      flag="X";
      setDis1(true);
      col1='blue';
    }
    
   check1();
  }
   
  function change2() {
    input2=flag;
    if (flag==="X") {
      flag="O";
      setDis2(true);
      col2='red';
    }
    else {
      flag="X";
      setDis2(true);
      col2='blue'
    }
    
    check2();
  }
  
  function change3() {
    input3=flag;
    if (flag==="X") {
      flag="O";
      setDis3(true);
       col3='red';
    }
    else {
      flag="X";
      setDis3(true);
       col3='blue';
    }
    
    check3();
  }
 
 function change4() {
    input4=flag;
    if (flag==="X") {
      flag="O";
      setDis4(true);
       col4='red';
    }
    else {
      flag="X";
      setDis4(true);
      col4='blue';
    }
    
    check4();
  }
  
  function change5() {
    input5=flag;
    if (flag==="X") {
      flag="O";
      setDis5(true);
       col5='red';
    }
    else {
      flag="X";
      setDis5(true);
       col5='blue';
    }
    
    check5();
  }
  
  function change6() {
    input6=flag;
    if (flag==="X") {
      flag="O";
      setDis6(true);
       col6='red';
    }
    else {
      flag="X";
      setDis6(true);
       col6='blue';
    }
    
    check6();
  }
  
  function change7() {
    input7=flag;
    if (flag==="X") {
      flag="O";
      setDis7(true);
       col7='red';
    }
    else {
      flag="X";
      setDis7(true);
       col7='blue';
    }
    
    check7();
  }
  
  function change8() {
    input8=flag;
    if (flag==="X") {
      flag="O";
      setDis8(true);
       col8='red';
    }
    else {
      flag="X";
      setDis8(true);
       col8='blue';
    }
    
    check8();
  }
  
  function change9() {
    input9=flag;
    if (flag==="X") {
      flag="O";
      setDis9(true);
       col9='red';
    }
    else {
      flag="X";
      setDis9(true);
       col9='blue';
    }
    
    check9();
  }
  
  function clear(){
    input1=''
    setDis1(false);
    col1="white";
    input2='';
    setDis2(false);
    col2="white";
    input3='';
    setDis3(false);
    col3="white";
    input4='';
    setDis4(false);
    col4="white";
    input5='';
    setDis5(false);
    col5="white";
    input6='';
    setDis6(false);
    col6="white";
    input7='';
    setDis7(false);
    col7="white";
    input8='';
    setDis8(false);
    col8="white";
    input9='';
    setDis9(false);
    col9="white";
    flag="X";
  }

  const btns=[
    {
      key:"1",
      val:input1,
      click:change1,
      dis:dis1,
      bg:col1
    },

    {
      key:"2",
      val:input2,
      click:change2,
      dis:dis2,
      bg:col2
    },

    {
      key:"3",
      val:input3,
      click:change3,
      dis:dis3,
      bg:col3
    },

    {
      key:"4",
      val:input4,
      click:change4,
      dis:dis4,
      bg:col4
    },

    {
      key:"5",
      val:input5,
      click:change5,
      dis:dis5,
      bg:col5
    },

    {
      key:"6",
      val:input6,
      click:change6,
      dis:dis6,
      bg:col6
    },

    {
      key:"7",
      val:input7,
      click:change7,
      dis:dis7,
      bg:col7
    },

    {
      key:"8",
      val:input8,
      click:change8,
      dis:dis8,
      bg:col8
    },

    {
      key:"9",
      val:input9,
      click:change9,
      dis:dis9,
      bg:col9
    },
  ]
 
  return (
  <div className="App">
    <div id='title'>TIC-TAC-TOE</div>
     <div className="btn">
       {btns.map(list=>
          <div key={list.key}><input type="button" value={list.val} onClick={list.click} disabled={list.dis} style={{background:list.bg}}/></div>
       )} 
      </div>
     <div id='clear-btn'><input type="button" value="Clear" onClick={clear} id="clr"/></div>
  </div>
    
  );
  
}

export default App;
