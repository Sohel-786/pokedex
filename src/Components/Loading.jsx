function Loading(){
    return(
            <div className="w-full flex justify-center items-start">
                <div className="w-fit animate-loading">
                    <img className="w-[35px] aspect-auto" src="/icons/pokeball.png" alt="Loading..." />
                </div>
            </div>
    )
}

export default Loading;