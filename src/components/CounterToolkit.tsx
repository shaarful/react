import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store.ts";
import {decrement, increment} from "../slices/counterSlice.ts";


export default function CounterToolkit() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
            </div>
        </div>
    )
}