import '../Login/index.css'

function LoginAdmin(){
    return (
        <div className="bg-gray-800 mt-10 max-w-lg mx-auto rounded-lg shadow-lg shadow-gray-800 body">
            <div className="p-5">
                <div className="text-indigo-500 text-xl font-semibold">Admin<span className="text-white">login</span></div>
                <div>
                    <form>
                        <input className="block mx-auto w-72 rounded-lg bg-none outline-0 focus:outline-indigo-800 focus:outline-1 py-1 my-8" name="name" id="name" value={'Username'} />
                        <input className="block mx-auto w-72 rounded-lg bg-none outline-0 py-1 my-8 focus:outline-indigo-800 focus:outline-1" name="password" id="password" value={'Password'}/>
                        <button className='mb-5 p-2 px-10 rounded-lg text-indigo-500 font-semibold border border-indigo-800 hover:bg-indigo-800 hover:shadow-md hover:shadow-indigo-800 hover:text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin;