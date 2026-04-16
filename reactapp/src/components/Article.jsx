import React,{useState} from 'react'
import ArtStyle from "../css/Article.module.css"
// import styled from 'styled-components'
import styled from '@emotion/styled'

function Article(props) {
    const[count,setCount]=useState(0)
    const[age,setAge]=useState(0)
    const[name,setName]=useState("")

    const handleIncrement=()=>{
        setCount(count+1)
        console.log(count)
    }
  return (
    <div>
      <h2>Article</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores nemo obcaecati a quam nihil nobis enim quod cupiditate, ipsam sunt laborum vel numquam, sint accusantium. Vitae aliquam esse culpa.</p>
      <h3 style={{backgroundColor:"red"}}>{props.data}</h3>
      <h2>{count}</h2>
      <button className={ArtStyle.btn} onClick={handleIncrement}>Increment</button>
      <Button>click me !</Button>
    </div>
  )
}

export default Article

const Button=styled.button`
    background-color:blue;
    color:white;
    border-radius:5px;
    height:40px;
    width:100px;
`

