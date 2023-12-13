import { useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Creatable from "react-select/creatable";

const UpdateJob = () => {
    const {id} = useParams();
   const {_id, companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, postedBy, skills} = useLoaderData()

   const [selectedOptions, setSelectedOptions] = useState(null);
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
 
   const onSubmit = (data) => {
     data.skill = selectedOptions;
     fetch(`http://localhost:3000/update-job/${id}`, {
         method: 'PATCH',
         headers: { 'Content-type': 'application/json' },
         body: JSON.stringify(data)
     })
     .then((res) => res.json())
     .then((result) => {
         if (result.acknowledged === true) {
             alert('Job Updated successfully');
         }
         reset();
     })
     .catch(error => {
         console.error("Error occurred:", error);
     });
 };
 


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <div className="text-3xl font-bold text-gray-900">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap px-10 lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
                <label className="block mb-3 text-lg">Job Title</label>
                <input type="text" {...register("jobTitle")} className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 text-sm md:text-base"/>
            </div>
            <div className="lg:w-1/2 w-full">
                <label className="block mb-3 text-lg">Company Name</label>
                <input type="text" {...register("companyName")} className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 text-sm md:text-base"/>
            </div> 
            <div className="lg:w-1/2 w-full">
            <label className="block mb-3 text-lg">Company Logo</label>
            <input
                type="url"
                placeholder="URL: https://share.com/img" 
                {...register("companyLogo")}
                className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 text-sm md:text-base" // Responsive text size classes
            />
            </div>
            <div className="lg:w-1/2 w-full">
                <label className="block mb-3 text-lg">Job Location</label>
                <input type="text" {...register("jobLocation")} className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 text-sm md:text-base"/>
            </div> 
            <div className="lg:w-1/2 w-full">
            <label className="block mb-3 text-lg">Salary Range</label>
            <div className="flex flex-row">
                <input
                type="text"
                {...register("salaryRange")}
                className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 text-sm md:text-base" // Responsive text size classes
                placeholder="Min-Max (e.g, 30000-50000)"
                />
            </div>
            {errors.salaryRange && <span>Please enter a valid salary range.</span>}
            </div>
            <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Salary Type</label>
            <select className="text-sm"{...register("salaryType")}>
                <option value="" className="text-xs">Select Salary Type</option>
                <option value="hourly">Hourly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
            {errors.salaryType && <span>This field is required.</span>}
            </div>            
            <div className="lg:w-1/2 w-full">
                <label className="block mb-3 text-lg">Date Posted</label>
                <input type="date" {...register("postingDate")} className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 text-sm md:text-base"/>
            </div>
            <div className="lg:w-1/2 w-full">
                <label className="block mb-3 text-lg">Experience Level</label>
                <select className="text-sm" {...register("experienceLevel")} >
                <option value="" className="text-xs">Select Your Experience</option>
                <option value="mid level">Mid Level</option>
                <option value="senior level">Senior Level</option>
                <option value="entry level">Entry Level</option>
                <option value="no experience">No Experience</option>
            </select>
            </div>
            <div className="lg:w-1/2 w-full">
            <label className="block mb-3 text-lg">Required Skills</label>
            <Creatable
                defaultValue={selectedOptions}
                onChange={setSelectedOptions}
                isMulti
                className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 text-sm md:text-base"
            />
            </div>
            <div className="lg:w-1/2 w-full">
                <label className="block mb-3 text-lg">Type Of Employment</label>
                <select className="text-sm" {...register("employmentType")} >
                <option value="" className="text-xs">Select Employment Type</option>
                <option value="full-time">Full time</option>
                <option value="part-time">Part time</option>
                <option value="temporary">Temporary</option>
                <option value="contract">Contract</option>
                <option value="Internship">Internship</option>
                </select>
            </div>
            <div className="w-full">
            <label className="block mb-3 text-lg">Job Description</label>
            <textarea rows={6} {...register("description")} className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"/>
            </div>
            <div className="w-full">
            <label className="block mb-3 text-lg">Job Posted By</label>
            <input
                type="email"
                placeholder="Your email@gmail.com"
                {...register("postedBy")}
                className="block w-full flex-1 border-1 bg-gray-100 py-1.5 pl-3 text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 text-sm md:text-base" // Use text-sm for small screens
            />
            </div>
        </div>
        <div className="lg:w-full w-full px-10 mt-6">
            <input type="submit" className="flex items-center bg-blue text-white font-semibold px-10 py-1 rounded-sm cursor-pointer"/>
        </div>
    </form>
    </div>  
</div>
  )
}

export default UpdateJob;