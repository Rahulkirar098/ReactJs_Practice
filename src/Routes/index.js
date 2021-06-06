import {
    UseState,
    UseStateArray,
    Spread,
    Todo,
    ShortCircuit
} from "../Componets/Thapa/Hooks";
import { 
    Form
 } from "../Componets/Thapa/Form";
 import { TodoApp } from "../Componets/Thapa/TodoApp";
 import { Weather } from "../Componets/Weather";
 import { CoronaApp } from "../Componets/CoronaApp";

export const Routes = [
    {
        path: "/usestate",
        title: "/usestate",
        exact: true,
        component: () => <UseState />,
    },
    {
        path: "/usestatearray",
        title: "/usestatearray",
        exact: true,
        component: () => <UseStateArray />,
    },
    {
        path: "/spread",
        title: "/spread",
        exact: true,
        component: () => <Spread />,
    },
    {
        path: "/todo",
        title: "/todo",
        exact: true,
        component: () => <Todo />,
    },
    {
        path: "/shortcircuit",
        title: "/shortcircuit",
        exact: true,
        component: () => <ShortCircuit />,
    },
    {
        path: "/form",
        title: "/form",
        exact: true,
        component: () => <Form />,
    },
    {
        path: "/todoapp",
        title: "/todoapp",
        exact: true,
        component: () => <TodoApp />,
    },
    {
        path: "/weather",
        title: "/weather",
        exact: true,
        component: () => <Weather />,
    },
    {
        path: "/corona",
        title: "/corona",
        exact: true,
        component: () => <CoronaApp />,
    },
]