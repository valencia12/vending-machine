import create from 'zustand'; 


//create unique id
function createId() {
    return Math.random().toString(36).substr(2, 9);
}
    
const useFoodStore = create(set => ({
    food: [],
    foodSelected: [],
    times: [], 
    initializeFood: async () => {
        const food = await fetch('https://vending-machine-test.vercel.app/api/products');
        const foodData = await food.json();
        set(state => ({
            food: foodData.data,
        }));
    },
    addFoodSelected: (foodId) => {
        set(state => {
            const foodSelectedCopy = [...state.foodSelected]; /*Copy like redux*/
            const selectedFood = state.food.find(food => food.id === foodId); /*Find the food*/
            selectedFood.id = createId(); /*Add id*/
            foodSelectedCopy.push(selectedFood); /*Add the food to the array*/
            let copyTimes = [...state.times];
            copyTimes.push(selectedFood["preparation_time"]);
            return {
                ...state, 
                foodSelected: foodSelectedCopy,
                times: copyTimes
            }
        });           
    },
    updateTime: (timeIndex, time) => {
        set(state => {
            const copyTimes = [...state.times];
            copyTimes[timeIndex] = time;
            return {
                ...state,
                times: copyTimes
            }
        });
    }, 
    removeFoodSelected: (foodIndex) => {
        set(state =>{
            let foodSelectedCopy= [...state.foodSelected];
            foodSelectedCopy.splice(foodIndex, 1);
            let copyTimes = [...state.times];
            copyTimes.splice(foodIndex, 1);
            return {
                ...state, 
                foodSelected: foodSelectedCopy,
                times: copyTimes
            }
        });
    }
}));


export default useFoodStore;
