
export default function Header() {

    return (
        <div className="flex justify-around">
            <div className="ml-10 self-center font-bold">POX<span className=" text-violet-800 font-bold">ME</span></div>
            <ul className="flex flex-row my-7 gap-7">
                <li><button type="button" className="focus:outline-none text-black bg-white transition ease-in-out delay-70 hover:text-white hover:bg-violet-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                    Memberships
                    </button>
                </li>
                <li><button type="button" className="focus:outline-none text-black bg-white transition ease-in-out delay-70 hover:text-white hover:bg-violet-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                    Community
                    </button></li>
                <li><button type="button" className="focus:outline-none text-black bg-white transition ease-in-out delay-70 hover:text-white hover:bg-violet-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                    FAQ
                    </button></li>
            </ul>
        </div>
    )
}

