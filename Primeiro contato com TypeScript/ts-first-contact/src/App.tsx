import "./App.css";
import { useState } from "react";
import { iCardProps } from "./components/Card/Card";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card"

function App() {
  // const [formData, setFormData] = useState<iCardProps | null>(null);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userHobby, setUserHobby] = useState("");
  const [userList, setUserlist] = useState<iCardProps[]>([]);

  const registerUser = () => {
    const newUser = {
      name: userName,
      age: userAge,
      hobby: userHobby
    }

    setUserlist([...userList, newUser])
  }

  return (
    <div className="App">
      <form>
        <Input type="text" placeholder="Digite seu nome" label="Nome" func={setUserName}/>
        <Input type="text" placeholder="Digite sua idade" label="Idade" func={setUserAge}/>
        <Input type="text" placeholder="Digite seu Hobby" label="Hobby" func={setUserHobby}/>
        <button type="submit" onClick={(e) => {
          e.preventDefault()
          registerUser()
        }}>Enviar</button>
      </form>
      <ul>
        {userList.map(user => <Card key={crypto.randomUUID()} name={user.name} age={user.age} hobby={user.hobby}/>)}
      </ul>
      <ul>

      </ul>
    </div>
  );
}

export default App;
