import {useState} from "react";
import Card from "../../UI/Card/Card";
import classes from "./AddUser.module.css"
import Button from "../../UI/Button/Button";

const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        console.log(`Name is ${name} and age is ${age}`)
        setName('');
        setAge('');
    }

    const changNameHandler = (e) => {
        setName(e.target.value);
    }

    const changeAgeHandler = (e) => {
        setAge(e.target.value);
    }

    //表单的submit
    // two way binding
    // -> onChange = {} -> 输入框的内容随着输入改变
    // value = {age} -> 表单提交之后，页面输入框的内容时state的初始值；清除掉之前写入的值
    return (
        <Card extraClasses={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>UserName</label>
                <input type='text' id='username' onChange={changNameHandler} value={name}/>

                <label>Age</label>
                <input type='text' id='age' onChange={changeAgeHandler} value={age}/>

                <Button type='submit'>Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;