import Button from "../button/button.js"
const Card = (props)=>{
    return (
        <div id = "Card">
            <img src={props.source} alt="" />
            <label id = "cardTitle">{props.title}</label>
            <label >Some quick example text to build on the card title and make up the bulk of the card's content.</label>
            <Button name = "Go Somewhere"/>
        </div>
    )
}

export default Card;