    import React, { useEffect, useState } from 'react'
    import { Link } from 'react-router-dom';

    const MyJobs = () => {
        const [jobs, setJobs] = useState([]);
        const [searchText, setSearchText] = useState('');
        const [loading, setLoading] = useState(true);

        const [currentPage, setCurrentPage] = useState(1);
        const resultsPerPage = 4;

        useEffect(() =>{
            setLoading(true)
            fetch(`http://localhost:3000/myJobs/talia@gmail.com`).then(res => res.json()).then(data => {
                setJobs(data)
            })
        }, [searchText])

        const indexOfLastItem = currentPage * resultsPerPage;
        const indexOfFirstItem = indexOfLastItem - resultsPerPage;
        
        const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

        const nextPage = () => {
            if (indexOfLastItem <jobs.length){
                setCurrentPage(currentPage+1)
            }
        }
        const PrevPage = () => {
            if (currentPage > 1){
                setCurrentPage(currentPage - 1)
            }
            
        }

        const handleSearch = () => {
            const filter = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
            setJobs(filter);
            setLoading(false)
        }

        const handleDelete = (id) => {
            fetch(`http://localhost:3000/job/${id}` , 
            {method: 'DELETE'})
            .then(res => res.json)
            .then(data => {
                if (data.acknowledged === true ) {
                    const updatedJobs = jobs.filter(job => job._id !== id);
                    setJobs(updatedJobs);
                    alert('Job Deleted Successfully!');
                }
            })
        }

        return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <div className='container'>
    <h1 className='text-center p-4'> MY POSTED JOBS</h1>
    <div className='p-2 text-center mb-2'>
    <input 
    onChange={(e) => setSearchText(e.target.value)} 
    type='text' 
    name='search' 
    id='search'
    className='py-2 pl-2 border focus:outline-none lg:w-6/12 mb-4 w-full'/>
    <button className='bg-blue text-white font-bold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>Search</button>
    </div>
    </div>
    <section>
    <div className="w-full md:w-10/12 xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
    <div className="flex flex-wrap items-center">
    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
    <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
    </div>
    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
    <Link to='/post-job'>
    <button className="bg-blue text-white active:bg-blue text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post A New Job</button>
    </Link>
    </div>
    </div>
    </div>
    <div className="block w-full overflow-x-auto">
    <div className="overflow-x-auto">
    <table className="items-center bg-transparent w-full border-collapse sm:overflow-x-auto">
    <thead>
    <tr>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    NO.
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    JOB TITLE
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    COMPANY NAME
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    SALARY
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    EDIT
    </th>
    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
    DELETE
    </th>
    </tr>
    </thead>
    <tbody>
    {
    currentJobs.map((job, index) => (
    <tr key={index}>
    <th className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
    {indexOfFirstItem + index + 1}
    </th>
    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
    {job.jobTitle}
    </td>
    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    {job.companyName}
    </td>
    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    €{job.minPrice} - €{job.maxPrice}
    </td>
    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    <button><Link to={`/edit-job${job?._id}`}>Edit</Link></button>
    </td>
    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
    <button onClick={() => handleDelete(job._id)} className='bg-red-500 py-2 px-6 text-white rounded-sm'>Delete</button>
    </td>
    </tr>
    ))
    }
    </tbody>
    </table>
    </div>
    </div>
    </div>
    </div>
    <div className='flex justify-center text-black space-x-6 mb-8'>
    {
        currentPage > 1 && (
            <button className='hover:underline' onClick={PrevPage}>Previous</button>
        )
    }
    {
        indexOfLastItem < jobs.length && (
            <button onClick={nextPage} className='hover:underline'>Next</button>
        )
    }

    </div>

    </section>
    </div>
    )
    }

    export default MyJobs;