"use client";
import { useState } from "react";

function State() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 text-white">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Interactive Counter</h1>
                <p className="text-2xl">Current Count: <span className="font-mono text-3xl">{count}</span></p>
            </div>
            <div className="space-x-4">
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-10 transition-transform transform hover:scale-105 shadow-md"
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-3 px-10 transition-transform transform hover:scale-105 shadow-md"
                >
                    Decrement
                </button>
                <button
                    onClick={() => setCount(0)}
                    className="bg-gray-700 hover:bg-gray-800 text-white rounded-lg py-3 px-10 transition-transform transform hover:scale-105 shadow-md"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default State;
