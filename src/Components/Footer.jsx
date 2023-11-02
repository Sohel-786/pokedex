function Footer(){
    return (
        <div>
            <div>

            </div>

            <div className="bg-[#1f1f1f] text-white">
                <div className="flex">
                    <div>
                        <h1><img src="/assets/pokecompany.png" alt="pokecompany" /></h1>

                        <ul>
                            <li><a className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline" href="#">News</a></li>
                            <li><a className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline" href="#">Parents Guide</a></li>
                            <li><a className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline" href="#">Customer Service</a></li>
                            <li><a className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline" href="#">About Our Company</a></li>
                            <li><a className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline" href="#">Careers</a></li>
                            <li><a className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline" href="#">Select a Country/Region</a></li>
                            <li><a className="ml-[8] mb-[8] pl-8 font-openSans text-[15px] hover:underline" href="#">Press Site</a></li>
                        </ul>
                    </div>

                    <div className="flex">
                        <ul className="flex">
                            <li>
                                <img className="h-[33.9988px] w-[35px]" src="/footerIcon/facebook.svg" alt="facebook" />
                            </li>
                            <li>
                                <img className="h-[33.9988px] w-[35px] bg-white rounded-[3px]" src="/footerIcon/youtube.png" alt="youtube" />
                            </li>
                            <li>
                                <img className="h-[33.9988px] w-[35px]" src="/footerIcon/twitter.png" alt="twitter" />
                            </li>
                            <li>
                                <img src="/footerIcon/instagram.svg" alt="instagram" />
                            </li>
                            <li>
                                <img className="bg-white rounded-[3px] h-[33.9988px] w-[35px]" src="/footerIcon/pintrist.png" alt="pintrist" />
                            </li>
                        </ul>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;