"use client";
import { useState } from "react";

function State() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 text-white px-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Interactive Counter</h1>
                <p className="text-xl sm:text-2xl">Current Count: <span className="font-mono text-2xl sm:text-3xl">{count}</span></p>
            </div>
            <div className="space-y-4 sm:space-x-4 sm:space-y-0 sm:flex sm:flex-row">
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-8 sm:px-10 transition-transform transform hover:scale-105 shadow-md w-full sm:w-auto"
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-3 px-8 sm:px-10 transition-transform transform hover:scale-105 shadow-md w-full sm:w-auto"
                >
                    Decrement
                </button>
                <button
                    onClick={() => setCount(0)}
                    className="bg-gray-700 hover:bg-gray-800 text-white rounded-lg py-3 px-8 sm:px-10 transition-transform transform hover:scale-105 shadow-md w-full sm:w-auto"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default State;
