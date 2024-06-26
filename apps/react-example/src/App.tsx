import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export const foo = 1;

export interface IProps {
    name: string;
}

export type TProps = {
    name: string;
};

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <div onClick={() => setCount((count) => count + 1)}>count is {count}</div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            {new Array(count).fill(null).map((_, i) => () => <div key={i}>Hello</div>)}
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
