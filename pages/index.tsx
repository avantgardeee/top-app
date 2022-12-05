import {Htag, Button, P, Tag, Rating} from "../components";
import React from "react";

export default function Home(): JSX.Element {
  return (<>
    <Htag tag="h1">Текст</Htag>
    <Button appearance='primary' arrow='right'>Кнопка</Button>
    <Button appearance='ghost' arrow="down">Кнопка</Button>
    <P size="l">Большой</P>
    <P>Средний</P>
    <P size="s">Маленький</P>
    <Tag size="s">Ghost</Tag>
    <Tag size="s" color="green">Green</Tag>
    <Tag size="m" color="red">Red</Tag>
    <Tag color="primary">primary</Tag>
    <Rating rating={4}/>
  </>);
}