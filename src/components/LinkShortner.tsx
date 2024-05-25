import React, { useState } from 'react';
import UrlForm from './UrlForm';
import ShortenedUrl from './ShortenedUrl';
import Navbar from './Navbar';
import Footer from './Footer';

const API_URL = 'https://api-ssl.bitly.com/v4/shorten';
const ACCESS_TOKEN = '51c0f38e43d69671ae3dd160c86d01ffe9e781be'; 

const LinkShortener: React.FC = () => {
    const [shortenedUrl, setShortenedUrl] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    const shortenUrl = async (url: string, customAlias?: string): Promise<void> => {
        try {
            const requestBody = {
                long_url: url,
                domain: 'bit.ly',
                ...(customAlias && { custom_bitlink: customAlias }),
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            if (data.link) {
                setShortenedUrl(data.link);
                setCopied(false);
            } else {
                throw new Error('Failed to shorten URL');
            }
        } catch (error: any) {
            alert(error.message || 'Failed to shorten URL');
        }
    };

    const resetUrl = (): void => {
        setShortenedUrl('');
        setCopied(false);
    };

    const copyToClipboard = (): void => {
        navigator.clipboard.writeText(shortenedUrl).then(() => {
            setCopied(true);
        }, () => {
            alert('Failed to copy the URL');
        });
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="md:p-8">
                    <h2 className="text-xl mb-4 uppercase font-bold text-[#335383ff]">URL Shortener</h2>
                    <UrlForm onSubmit={shortenUrl} />
                    {shortenedUrl && (
                        <div>
                            <ShortenedUrl url={shortenedUrl} />
                            <button type="submit" onClick={copyToClipboard} className="bg-[#335383ff] hover:bg-white text-white hover:text-[#335383ff] font-bold py-2 px-4 rounded-md m-2">
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                            <button type="submit" onClick={resetUrl} className="bg-[#335383ff] hover:bg-white text-white hover:text-[#335383ff] font-bold py-2 px-4 rounded-md m-2">
                                Reset
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LinkShortener;
