import React, {useEffect, useState} from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card';
import JobsPage from './jobsPage';
import LeftSideBar from '../sidebar/leftSideBar';



const Home = () => {
  const [category, setCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const itemsFiltered = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );



  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handelClick = (event) => {
    setCategory(event.target.value);
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
          postingDate.toLowerCase() === selected.toLowerCase() ||
          jobLocation.toLowerCase() === selected.toLowerCase()
        ));
    }

    return jobsFiltered.map((data, i) => <Card key={i} data={data} />)
  }

  const results = filteredData(jobs, category, query);
  
  return (
   <div>
    <Banner query={query} handleInput={handleInput} />

    <div className='bg-[#FAFAFA] md:grid grid-cols-3 gap-8 lg:px-24 mt-7 px-4 py-2'>
      <div className='bg-white p-4 rounded'>
        <LeftSideBar handleChange={handleChange} handelClick={handelClick} />
      </div>

      <div className='col-span-2 bg-white p-4 rounded-sm'><JobsPage results={results} /></div>

    </div>
    
   </div>
  )
}

export default Home