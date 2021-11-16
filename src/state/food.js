import create from 'zustand'; 

const useFoodStore = create(set => ({
    food: [],
    foodSelected: [],
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
            foodSelectedCopy.push(state.food.find(food => food.id === foodId));
            return {
                ...state, 
                foodSelected: foodSelectedCopy,
            }
        });                   
    
    },
    removeFoodSelected: (foodIndex) => {
        set(state =>{
            let foodSelectedCopy = [...state.foodSelected];
            foodSelectedCopy.splice(foodIndex, 1);
            return {
                ...state, 
                foodSelected: foodSelectedCopy,
            }
        }); 
    }
}));


export default useFoodStore;
