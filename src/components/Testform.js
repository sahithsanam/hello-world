import react,{useState} from 'react';
export default function Testform(props){

    const[text,changetext]=useState("");
    const[head,changehead]=useState("enter the text to analyze");
    const [word,changeword]=useState(0);
    const onchange=(event)=>{
      let str=event.target.value.split(/[ ]+/);
      let out=str.join(" ");
      out.trim();
      changetext(event.target.value);
      if(out.length==0){
        changeword(0);
      }
      else{
      changeword(out.split(" ").length);
      }
    }
    const onclick=()=>{
        let text1=text.toUpperCase();
        changetext(text1);
        changehead("text entered");
        props.al("changed to upper case","success");
    }
    const lowclick=()=>{
        let text2=text.toLowerCase();
        changetext(text2);
        props.al("changed to lower case","success");
    }
    const reset=()=>{
        changetext('');
        changehead("enter the text to analyze");
        props.al("text has been reset","success");
        changeword(0);
    }
    const copytext=()=>{
        let text=document.getElementById("myid");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.al("text has been copied","success");
    }
    const removespaces=()=>{
        let text1=text.split(/[ ]+/);
        changetext(text1.join(" "));
        props.al("extra spaces have been removed ","success");
    }
   return(
     <>
<div className="mb-3" >
  <h1 className={`text-${props.mode==="dark"?"white":"black"}`}>{head}</h1>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode=="light"?"white":"grey" }} onChange={onchange} id="myid" rows="8"></textarea>
</div>
  <button className={`btn btn-success button mx-2 `} onClick={onclick}>convert to upper case</button>
  <button className="btn btn-primary mx-2" onClick={lowclick}>convert to lower case</button>
  <button className="btn btn-danger reset mx-2" onClick={reset}>reset back</button>
  <button className='btn btn-primary copy mx-2' onClick={copytext}>Copy Text</button>
  <button className='btn btn-success copy mx-2' onClick={removespaces}>remove extra spaces</button>
  <div className="container my-3">
    <h4 className={`text-${props.mode==="dark"?"white":"black"}`}>No of characters are {text.trim().length}</h4>
    <h4 className={`text-${props.mode==="dark"?"white":"black"}`}>No of words are {word}</h4>
    <h2 className={`text-${props.mode==="dark"?"white":"black"}`}>preview</h2>
    <p className={`text-${props.mode==="dark"?"white":"black"}`}>{text}</p>
  </div>
     </>
   );
}