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
        const foodList = foodData.data;
        // change the if to every food item
        for (let i = 0; i < foodList.length; i++) {
            const foodItem = foodList[i];
            const id = createId();
            const foodItemWithId = {
                ...foodItem,
                id,
            };
            foodList[i] = foodItemWithId;
        }

        set({food: foodList});
    },
    addFoodSelected: (foodId) => {
        set(state => {
            const foodSelectedCopy = [...state.foodSelected]; /*Copy like redux*/
            const selected = state.food.find(food => food.id === foodId); /*Find the food*/
            foodSelectedCopy.push(selected); /*Add the food to the array*/
            let copyTimes = [...state.times];
            console.log(copyTimes);
            copyTimes.push(selected["preparation_time"]);
            return {
                ...state, 
                foodSelected: foodSelectedCopy,
                times: copyTimes
            }
        });           
    },
    updateTime: (timeIndex) => {
        set(state => {
            const copyTimes = [...state.times];
            copyTimes[timeIndex] -= 1;
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
            console.log(copyTimes);
            //dsadasdasss
            return {
                ...state, 
                foodSelected: foodSelectedCopy,
                times: copyTimes
            }
        });
    }
}));


export default useFoodStore;
