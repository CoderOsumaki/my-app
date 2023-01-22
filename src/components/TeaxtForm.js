import React , {useState} from 'react'

export default function TeaxtForm(props) {
    const handleOnClick =() => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnClick2 =() => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnClick3 =() => {
       // let newText = text.toLowerCase();
        setText("")
    }
    const handleOnChange =(event) => {
        //console.log("button clicked");
        setText(event.target.value)
    }
    const [text ,setText] = useState('Enter here');
  return (
    <>
    <div className=" container" style={{ color :props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="container my-3" >
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className= " btn btn-primary mx-2" onClick={handleOnClick}>Covert To Upper Case</button>
        <button className= " btn btn-primary mx-2" onClick={handleOnClick2}>Covert To Lower Case</button>
        <button className= " btn btn-primary mx-2" onClick={handleOnClick3}>CLEAR</button>
    </div>
    <div className='container my-4' style={{ color :props.mode === 'dark' ? 'white' : 'black'}}>
        <h1> Your text summery here</h1>
        <h4>{text.length?text.split(" ").length : 0} words and {text.length} characters</h4>
    </div>
    <div className='container my -3' style={{ color :props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}