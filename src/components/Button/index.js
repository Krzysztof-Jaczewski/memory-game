import { useDispatch, useSelector } from "react-redux"
import { selectCards, shuffleCards } from "../gameSlice"
import { StyledButton } from "./styled"

export  const Button = ()=> {
const cards = useSelector(selectCards)
console.log(cards)
const dispatch = useDispatch()
return (
    <StyledButton onClick ={()=>dispatch(shuffleCards())} >New Game</StyledButton>
)
}
