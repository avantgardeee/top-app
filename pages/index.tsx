import { Htag, Button, P } from "../components";
import React from "react";

export default function Home(): JSX.Element {
  return (<>
    <Htag tag="h1">Текст</Htag>
    <Button appearance='primary' arrow='right'>Кнопка</Button>
    <Button appearance='ghost' arrow="down">Кнопка</Button>
    <P size="l">Большой</P>
    <P>Средний</P>
    <P size="s">Маленький</P>
  </>);
}