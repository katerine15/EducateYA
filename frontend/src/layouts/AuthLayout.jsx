import { Outlet} from 'react-router-dom';
import HeaderLogin from '../componentes/HeaderLogin'


const AuthLayout = () => {
    return (
        <>
            <HeaderLogin /> 
            <main className="container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center">
                <div className="md:w-2/3 lg:w-1/2">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default AuthLayout