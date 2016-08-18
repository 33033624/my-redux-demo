export default function (state = 1,action) {
    switch (action.type) {
        case 'ADD':
            state += action.count;
            return state;

    }
}