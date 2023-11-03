import EqualLayout from "../Layouts/EqualLayout";

function LandingPage(){
    return(
        <EqualLayout>
            <section className="min-h-[300px] max-w-[1280px] mx-auto bg-white flex flex-col items-center" style={{
                backgroundImage : 'url("/assets/whitebgImage.png")',
            }}>

                <div className="w-[77%] bg-white flex justify-between px-[14.5px] pt-[37px]">
                    <div className="w-[66%] float-left">
                        <div className="w-full">
                            <img className="w-full rounded-tl-[5px] rounded-tr-[5px]" src="/assets/scarlet-violet-169-en.png" alt="Image" />
                        </div>
                    </div>

                    <div className="w-[32.3%]">
                        <div className="w-full">
                            <div className="w-full">
                                <img className="w-full rounded-tl-[5px] rounded-tr-[5px]" src="/assets/preview-card.png" alt="Card" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </EqualLayout>
    )
}

export default LandingPage;