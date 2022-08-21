// select dom elements
const counterContainer = document.getElementById('counterContainer')
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");


// initial state
const initialState = {
    value: 0,
};
const INCREMENT = "increment"
const DECREMENT = "decrement"
// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type ===INCREMENT ) {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === DECREMENT) {
      
        return {
            ...state,
            value: state.value-1,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);
// button click listeners
    incrementEl.addEventListener("click", () => {
        store.dispatch({
            type: INCREMENT,
        });
    });
    decrementEl.addEventListener("click", () => {
        if(counterEl.innerHTML>0){
            store.dispatch({
                type:DECREMENT,
            });
        }else{
            alert("decrement not possible because now It's already zero ")
        }
        
    });