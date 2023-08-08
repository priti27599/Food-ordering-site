import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Biryani',
      description: 'with Chicken and indian spices',
      price: 200,
      img: require('../../assests/d1.jpg'),
    },
    {
      id: 'm2',
      name: 'Dosa',
      description: 'South Indian Special',
      price: 100,
      img:require('../../assests/d2.jpg'),
    },
    {
      id: 'm3',
      name: 'Pizza',
      description: 'American, raw, meaty',
      price: 180,
      img:require('../../assests/d3.jpg'),
    },
    {
      id: 'm4',
      name: 'Allu Paratha',
      description: 'Healthy...and tasty...',
      price: 50,
      img: require('../../assests/d4.jpg'),
  },
  {
    id: 'm5',
    name: 'Chicken Curry',
    description: 'Healthy...and tasty...',
    price: 250,
    img: require('../../assests/d5.jpg'),
  },
  ];

const AvailableMeals = () => {

  const mealsList = DUMMY_MEALS.map(meal =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img ={meal.img}
    />)   
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}              
        </ul>  
      </Card>  
    </section>
  )
}

export default AvailableMeals