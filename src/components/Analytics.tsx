import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';
import Navbar from './Navbar';

const Analytics: React.FC = () => {
    const [clicks, setClicks] = useState<number>(0);
    const [clicksData, setClicksData] = useState<any[]>([]);

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const q = query(collection(db, 'urlClicks'));
                const querySnapshot = await getDocs(q);
                
                const data = querySnapshot.docs.map(doc => doc.data());
                setClicks(data.length);
                setClicksData(data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };

        fetchAnalyticsData();
    }, []);

    return (
        <div>
<Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className='md:p-8 p-5'>
                <h2 className="text-xl mb-4 font-bold uppercase text-[#335383ff]">URL Analytics</h2>
                <p>Total Clicks: {clicks}</p>
                <div>
                    <h3 className="text-xl mb-2">Clicks Data:</h3>

                      <ul>
                        {clicksData.map((click, index) => (
                            <li key={index}>
                                {click.url} - {click.timestamp?.seconds ? new Date(click.timestamp.seconds * 1000).toLocaleString() : 'No timestamp'}
                            </li>
                        ))}
                    </ul>
                </div>

                <Link to="/link-shortner" className="bg-[#335383ff]  text-white hover:text-[#335383ff] font-bold py-2 px-4 rounded-md m-2 hover:bg-white">
                    Go back to URL Shortener
                </Link>
            </div>
        </div>
                        </div>
    );
};

export default Analytics;
