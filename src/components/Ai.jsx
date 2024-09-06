import React from "react";

export default function Ai(){
    return(
        <>
        <main className=" mx-auto my-14  ">
            <div className="bg-gradient-to-r from-blue-400 to-green-600 h-[35vh] flex flex-col px-4 py-[10vh] items-center">
                <h4 className="md:text-3xl text-white text-2xl font-bold">Get Instant Answers with A.I.</h4>
                <p className="mt-2 md:text-2xl text-white text-base">Hi there!👋 My name is Alex your very own SelfLancer AI</p>
                <button className="active:border active:border-green-900 bg-green-700 hover:bg-green-500 hover:text-black duration-500 py-2 px-5  text-white font-bold rounded-full mt-5 ">Search with AI</button>
            </div>
        </main>
        </>
    );
}