
import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Appoinments from './pages/Appoinments'
import Header from './pages/Header'
import TodoList from './pages/TodoList'
import CovidUpdates from './pages/CovidUpdates'

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className='flex'>
        {/* main sidebar */}
        <Sidebar setSidebarOpen={setSidebarOpen} />

        <div className={`md:pl-32 min-h-screen flex-1 md:p-8 duration-300 ${sidebarOpen ? 'lg:pl-72' : 'lg:pl-32'}`}>

          {/* navbar area */}
          <div className='absolute top-8 left-8 mr-6 w-[88%] z-10 md:static md:w-full'>
            <Navbar />
          </div>


          {/* main content area */}
          <div className={`lg:grid grid-cols-3 md:mt-6 ${sidebarOpen ? 'lg:gap-6' : 'gap-32'}`}>

            {/* desktop view */}
            <div className='col-span-2 h-fit'>
              <Header />

              <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:block px-8 md:px-0'>
                <div className='order-2 md:order-1'>
                  <TodoList />
                </div>

                {/* tablet and mobile view */}
                <div className='lg:hidden order-1 md:order-2'>
                  <Appoinments />
                </div>
                {/* end tablet and mobile view */}
              </div>

            </div>

            <div className='col-span-1 px-8 md:px-0'>
              <div className='hidden lg:block'>
                <Appoinments />
              </div>
              <div className='mt-10'>
                <CovidUpdates />
              </div>
            </div>
            
            {/* end desktop view */}

          </div>

        </div>

      </div>
    </>
  )
}

export default App
