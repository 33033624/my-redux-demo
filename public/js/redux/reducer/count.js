export default function (state = {a: 1},action) {
    console.log('dispatch');
    switch (action.type) {
        case 'ADD':
            state.a += action.count;
              console.log(state.a,'add');
            return state;
        case 'DECREASE':
            state.a -= action.count;
            return state;
        default:
            return state;
    }

}
