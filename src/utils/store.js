import {counterDelete, counterIncrement} from "../redux/counter";

export const mapStateProps = (state) => {
    return ({
        counter: state.counter,
        user: state.user
    })
}



export const mapDispatchProps = (dispatch) => ({
    counterDelete:() => {
        dispatch(counterDelete())

    },
    counterIncrement:(item) => {
        dispatch(counterIncrement(item))
    }
})

