import {useSelector} from "react-redux";
import {RootState} from "../store.ts";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    return (
        <>
            <div className="card">
                count is <span className="font-bold">{count}</span>
            </div>
        </>
    )
}