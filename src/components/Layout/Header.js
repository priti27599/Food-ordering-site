import { Fragment } from 'react';
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
         <h1>GoodMeals</h1>   
        <HeaderCartButton onClick={props.onShowCart} />  
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of declicious food!"/>
        </div>  
   </Fragment>
  )
}

export default Header