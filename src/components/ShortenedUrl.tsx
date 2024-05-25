
import React from 'react';
import { analytics, db } from '../firebaseConfig';
import { logEvent } from 'firebase/analytics';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface ShortenedUrlProps {
    url: string;
}

const ShortenedUrl: React.FC<ShortenedUrlProps> = ({ url }) => {
    const handleClick = async () => {
        logEvent(analytics, 'url_click', { url });

        try {
            await addDoc(collection(db, 'urlClicks'), {
                url,
                timestamp: serverTimestamp(),
            });
            console.log("Document successfully written!");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div>
            <p>
                Shortened URL: 
                <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                    {url}
                </a>
            </p>
        </div>
    );
};

export default ShortenedUrl;
