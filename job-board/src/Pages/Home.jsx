import React, {useEffect, useState} from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card';
import JobsPage from './jobsPage';
import LeftSideBar from '../sidebar/leftSideBar';



const Home = () => {
  const [category, setCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');
  const [Loading, setLoading] = useState(true);
  const[page, setPage] = useState(1);
  const itemsPage = 6;

  useEffect(() => {
    setLoading(true)
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const itemsFiltered = jobs.filter((job) =>
    job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handelClick = (event) => {
    setCategory(event.target.value);
  }

  const calculateCurrentPage = () => {
    const startIndex = (page -1) * itemsPage;
    const endIndex = startIndex + itemsPage;
    return {startIndex, endIndex};
  }

  const nextPage = () => {
    if(page < Math.ceil(itemsFiltered.length / itemsPage)){
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if(page > 1){
      setPage(page - 1)
      }
  }

  const filteredData = (jobs, selected, query) => {
    let jobsFiltered = jobs;

    if(query){
      jobsFiltered = itemsFiltered;
    }

    if(selected){
      jobsFiltered = jobsFiltered.filter(({salaryType, employmentType, 
        maxPrice, experienceLevel, postingDate, jobLocation}) => (
          salaryType.toLowerCase() === selected.toLowerCase() || 
          employmentType.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= (selected) ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected ||
          jobLocation.toLowerCase() === selected.toLowerCase()
        ));
    }
    const {startIndex, endIndex} = calculateCurrentPage();
    jobsFiltered = jobsFiltered.slice(startIndex, endIndex);
    return jobsFiltered.map((data, i) => <Card key={i} data={data} />)
  }

  const results = filteredData(jobs, category, query);
  
  return (
   <div>
    <Banner query={query} handleInput={handleInput} />

    <div className='bg-[#FAFAFA] md:grid grid-cols-3 gap-8 lg:px-24 mt-7 px-4 py-2'>
      

      <div className='col-span-2 bg-white p-4 rounded-sm'>
        {
          Loading ? (<p className='font-medium'>Loading...</p>) : results.length> 0 ? (<JobsPage results={results} />) : <>
          <h2 className='text-lg font-semibold mb-2'>{results.length} Jobs</h2>
          <p>No data found</p>
          </>
        }
        {
     results.length > 0 ? (
      <div className='flex flex-wrap justify-center mt-4 space-x-7'>
        <button onClick={previousPage} disabled={page === 1} className='hover:underline'>Previous</button>
        <span className='mx-2'>Page {page} of {Math.ceil(itemsFiltered.length / itemsPage)}</span>
        <button onClick={nextPage} disabled={page === Math.ceil(itemsFiltered.length / itemsPage)} className='hover:underline'>
        Next</button>
      </div>
    ) : null
        }

      </div>
      
      <div className='bg-white p-4 rounded'>
        <LeftSideBar handleChange={handleChange} handelClick={handelClick} />
      </div>

    </div>
    
    </div>
  )
}

export default Home