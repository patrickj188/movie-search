import { useRef } from 'react';
import Card from './ui/Card'
import classes from './NewUserForm.module.css';

function NewUserForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const userNameInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredUserName = userNameInputRef.current.value;


    const userData = {
      name: enteredName,
      email: enteredEmail,
      userName: enteredUserName,
    };

    props.onAddUser(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='user name'>User name</label>
          <input type='text' required id='user name' ref={userNameInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewUserForm;