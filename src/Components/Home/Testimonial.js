import React from 'react';
import persen1 from '../../images/person1.jpg'
import persen2 from '../../images/person2.jpg'
import persen3 from '../../images/person3.jpg'

const Testimonial = () => {
    return (
        <div className='max-w-screen-2xl mx-auto my-20'>
            <h3 className='text-4xl	font-bold text-center py-4 text-primary mb-10'>Testimonials</h3>
            <div className='grid lg:grid-cols-4 text-center gap-10'>
                <div>
                    <div className='flex grid-cols-2'>
                        <div className="card w-96 bg-red-50 shadow-xl">
                            <div className="avatar mx-auto pt-2">
                                <div className="w-24 rounded-full border-4 border-primary">
                                    <img src={persen1} alt='' />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className=" font-bold text-2xl">Andrio Deco</h2>
                                <p><small>Managar of Ikma  Automotion</small></p>
                                <p>Greate quality of work and unique design of tools.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex grid-cols-2'>
                        <div className="card w-96 bg-red-50 shadow-xl">
                            <div className="avatar mx-auto pt-2">
                                <div className="w-24 rounded-full border-4 border-primary">
                                    <img src={persen2} alt='' />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className=" font-bold text-2xl">Fraklin DeCabrio</h2>
                                <p><small>Founder of Helio Steel</small></p>
                                <p>Fast delivery  with perfect management</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex grid-cols-2'>
                        <div className="card w-96 bg-red-50 shadow-xl">
                            <div className="avatar mx-auto pt-2">
                                <div className="w-24 rounded-full border-4 border-primary">
                                    <img src={persen3} alt='' />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className=" font-bold text-2xl">Janifer Austin</h2>
                                <p><small>CEO of Jaica</small></p>
                                <p>Greate product and qualitifull manufacturer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex grid-cols-2'>
                        <div className="card w-96 bg-red-50 shadow-xl">
                            <div className="avatar mx-auto pt-2">
                                <div className="w-24 rounded-full border-4 border-primary">
                                    <img src={persen1} alt='' />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className=" font-bold text-2xl">DeSilva Amber</h2>
                                <p><small>Founder of DC</small></p>
                                <p>Nice work and greate tools</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Testimonial;