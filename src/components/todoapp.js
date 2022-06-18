import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    color:#fff;
    font-family: 'Acme', sans-serif;
  }
  body{
    width: 97vw;
    height: 100vh;
    background: linear-gradient(to bottom, #323232 40%, #7CFC00 100%);
    background-size: 200% 200%;
    animation: back_anim 5s ease alternate infinite;

    @keyframes back_anim {
  0%{
    background-position: 0% 70%;
  }
  50%{
    background-position: 0% 60%;
  }
  100%{
    background-position: 0% 0%;
  }
}
  }
`
const Container = styled.div`
  width: 100%;
  display:flex ;
  justify-content: center;
`

const InputTask = styled.input`
  width: 20em;
  height: 2.5em;
  border-radius: 10px;
  border:2px solid #7CFC00;
  background-color: #828282;
  padding-left: 1em;
  outline: none;
  font-size: 1.2em;
  box-shadow: #7CFC00 0px 0px 10px 5px;
  margin: 2em 2em 0 0em;
`

const BtnAdd = styled.button`
  width:50px;
  height: 50px;
  background-color:transparent;
  border: 1px solid #fff;
  border-radius:50%;
  font-size:1.8em;
  cursor: pointer;
  text-align: center;

  &:hover{
    transition: box-shadow 2s;
    box-shadow: inset  0vw 10vh #008B00;
    }
`

const ContainerMap = styled.ul`
  width: 40em;
  list-style:  none;
  margin: 4em 4em 0 0;
`

const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  font-size: 1.5em;
  margin: 2em 0 1.5em 0;
`

const BtnRemove = styled.button`
  width:50px;
  height: 50px;
  background-color:transparent;
  border: 1px solid #fff;
  border-radius:50%;
  font-size:1.8em;
  cursor: pointer;
  text-align: center;

  &:hover{
    transition: box-shadow 2s;
    box-shadow: inset  0vw 10vh #8B0000;
  }
`

export default function App() {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);

  function ChangeList() {
    if (task !== "") {
      const baginfo = {
        value: task,
        id: Math.random()
      };

      setList([...list, baginfo]);
    } else {
      alert("Escreva uma tarefa!")
    }
    setTask("");
  }

  function deleteTask(id) {
    const remove = list.filter(e => e.id !== id)
    setList(remove)
  }

  return (
    <Container>
      <GlobalStyle />
      <form style={{ margin:"0 auto",textAlign:"center"}} onSubmit={(e) => { e.preventDefault(); }}>
        <h1 style={{ margin:"2em 0 0 0"}}>Escreva suas tarefas do dia!</h1>
        <div>
          <InputTask placeholder="Digite sua tarefa" value={task} onChange={(e) => setTask(e.target.value)} />
          <BtnAdd onClick={() => { ChangeList(); }}>✔</BtnAdd>
          <ContainerMap>
            {list.map((item) => (
              <ListBox key={item.id}>
                <ListItem>{item.value}</ListItem>
                <BtnRemove onClick={() => { deleteTask(item.id) }}>🗑</BtnRemove>
              </ListBox>
            ))}
          </ContainerMap>
        </div>

      </form>
    </Container>

  );
}