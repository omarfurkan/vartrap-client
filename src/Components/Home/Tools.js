import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <h2 className='text-6xl	font-bold text-center py-10 text-primary'>Tools</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 text-justify'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;