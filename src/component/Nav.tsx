import {Link, useLocation} from 'react-router-dom'

function Nav() {
    const currentPath = useLocation().pathname;
    // console.log(currentPath.pathname)

    const appPages =[
        {pageName: 'Home', pageUrl: '/'},
        {pageName: 'About', pageUrl: '/about'},
        {pageName: 'Contacts', pageUrl: '/contacts'},
        
    ]
  return (
    <nav className='flex justify-center items-center bg-gray-200 px-5 rounded-md'>
        {/* <Link to="/">
            <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700">Home</button>
        </Link>
        <Link to="/about">
            <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700">About</button>
        </Link>
        <Link to="/contacts">
            <button className="text-xl font-bold bg-blue-400 px-2.5 py-1 rounded-md m-5 cursor-pointer hover:transition hover:ease-in-out hover:duration-700">Contacts</button>
        </Link> */}
        {appPages.map((page)=>(
            <Link to={page.pageUrl} className={`${currentPath === page.pageUrl && 'underline bg-blue-300'}`}>{page.pageName}</Link>
        ))}
    </nav>
  )
}

export default Nav