
const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-[0px_0px_10px_3px_lightgray] rounded-md m-auto">
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Correo</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between ">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-lime-600 hover:text-lime-500">¿Has olvidado tu contraseña?</a>
                </div>
              </div>
              <div className="mt-2 mb-10">
                <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="transition-all flex w-full justify-center rounded-md bg-[#39A900] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:[#39A900] hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
              {/* <button type="submit" className="transition-all flex w-full justify-center rounded-md border border-[#39A900] px-3 py-1.5 text-sm font-semibold leading-6 text-[#39A900] shadow-sm hover:bg-[#39A900] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button> */}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿NO TIENES UNA CUENTA?
            <a href="#" className="font-semibold leading-6 text-lime-600 hover:text-lime-500">REGISTRATE</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login