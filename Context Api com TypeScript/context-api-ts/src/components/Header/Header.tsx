import { HeaderStyled } from "./HeaderStyled"

interface iHeader {
  text: string
}

export const Header = ({text}: iHeader) => {
  return (
    <HeaderStyled>
        <h2>{text}</h2>
    </HeaderStyled>
  )
}

