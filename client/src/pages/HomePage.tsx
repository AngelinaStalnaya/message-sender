import { Link } from "react-router";

const HomePage = () => {
    return (
        <div className='flex flex-col gap-3 p-3 justify-center'>
            <h1 className='font-bold font-stretch-50% text-2xl text-amber-950'>Добро пожаловать в Message-sender!</h1>
            <h3 className='font-medium text-xl text-zinc-600'>Чтобы начать использование приложения, нажмите на кнопку ниже</h3>
            <Link to='/send_message' 
            className='text-lg border-solid border-2 rounded-2xl p-0.5 text-zinc-600  border-amber-950 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 ease-in-out'>
                Далее
                </Link>
        </div>
    )

}

export default HomePage;