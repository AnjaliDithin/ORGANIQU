import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

//foodDetails

foodDetails = [
  {
    id:1,
    foodName:"Paneer Grilled Sandwitch ",
    foodPrice:300,
    foodDetails:"Food is any substance consumed to provide nutritional support for an organism.It can be raw, processed or formulated and is consumed orally by human for growth, health or pleasure.",
    foodImg:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoZWVzZSUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id:2,
    foodName:"Italian Pizza  ",
    foodPrice:500,
    foodDetails:"Food is any substance consumed to provide nutritional support for an organism.It can be raw, processed or formulated and is consumed orally by human for growth, health or pleasure.",
    foodImg:"https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id:3,
    foodName:"Jack in the Box's Two Tacos",
    foodPrice:350,
    foodDetails:"Food is any substance consumed to provide nutritional support for an organism.It can be raw, processed or formulated and is consumed orally by human for growth, health or pleasure.",
    foodImg:"https://images.unsplash.com/photo-1563282397-cdc218eccfda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  },
  {
    id:4,
    foodName:"McDonald's fries",
    foodPrice:250,
    foodDetails:"Food is any substance consumed to provide nutritional support for an organism.It can be raw, processed or formulated and is consumed orally by human for growth, health or pleasure.",
    foodImg:"https://images.unsplash.com/photo-1619881589944-d8ae4bfb0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  },
  {
    id:5,
    foodName:"Chicken Drumsticks",
    foodPrice:380,
    foodDetails:"Food is any substance consumed to provide nutritional support for an organism.It can be raw, processed or formulated and is consumed orally by human for growth, health or pleasure.",
    foodImg:"https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGRydW1zdGlja3N8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id:6,
    foodName:"Pancake stack",
    foodPrice:300,
    foodDetails:"Food is any substance consumed to provide nutritional support for an organism.It can be raw, processed or formulated and is consumed orally by human for growth, health or pleasure.",
    foodImg:"https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXMlMjBpbWFnZXN8ZW58MHx8MHx8&w=1000&q=80",
  },
    
]

}
