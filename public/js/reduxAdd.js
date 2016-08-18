export default function (state = {a: 1},action) {
    switch (action.type) {
        case 'ADD':
            state.a += action.count;
            return state;
        default:
            return state;
    }
}