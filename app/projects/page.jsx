'use client'
import React from 'react'
import { client } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';
import { useState, useEffect } from 'react';

const page = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const productsData = await client.fetch(`*[_type == "post"]`);
                setProjects(productsData);
                console.log(productsData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div>

            {projects && projects.length > 0 ? (

                projects.map((product) => (

                    <div>

                        <div>

                            <div>
                                <div className="w-full h-[40vh]">
                                   
                                </div>

                                <div className="p-2">

                                    <div className="gilroy text-3xl text-center mt-1">{product?.title}</div>
                                    

                                </div>

                            </div>

                            <div>

                                <div>
                                    <button className="text-black hover:text-white hover:bg-black" variant="contained" color="primary">Pay</button>
                                </div>

                            </div>

                        </div>

                    </div>
                ))
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default page