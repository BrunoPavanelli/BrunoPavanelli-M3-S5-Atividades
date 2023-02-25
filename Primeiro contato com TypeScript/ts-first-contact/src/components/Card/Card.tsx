export interface iCardProps {
    name: string;
    age: string;
    hobby: string
}

const Card = ({name, age, hobby}: iCardProps) => {
  return (
    <li>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Hobby: {hobby}</p>
    </li>
  )
}

export default Card