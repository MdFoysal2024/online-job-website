import React, { useState } from 'react';
import { useEffect } from 'react';
import HotJobCard from './HotJobCard';


const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobs(data)
            })
    }, [])

    console.log(jobs)





    return (
        <div className='py-12'>

            <div className='py-12 '>
                <h1 className='text-center font-bold text-3xl'>Total Jobs({jobs.length}) Here</h1>
                <p className='text-center  md:w-1/2 mx-auto px-4 py-2'>Consectetur adipisicing elit. Repellat cupiditate, iste quidem itaque enim autem expedita  vero, debitis labore nemo culpa. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>

        </div>
    );
};

export default HotJobs;