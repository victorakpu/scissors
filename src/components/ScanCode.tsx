
import React, { useState } from 'react';
import QRcode from 'qrcode';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Navbar from './Navbar';

interface QRCodeInput {
  url: string;
}

const schema = yup.object().shape({
  url: yup.string().url('Enter a valid URL').required('URL is required'),
});

const ScanCode: React.FC = () => {
  const [qrcode, setQrcode] = useState<string>('');
  const { register, handleSubmit, formState: { errors } } = useForm<QRCodeInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<QRCodeInput> = (data) => {
    QRcode.toDataURL(
      data.url,
      {
        width: 400,
        margin: 2,
        color: {
          dark: "#335383ff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrcode(url);
      },
    );
  };

  return (
    <div>


        <Navbar />
      <div className="min-h-screen items-center justify-center bg-gray-100 md:p-[10rem] pt-[10rem]">
        <div className=' mx-5'>
          <form onSubmit={handleSubmit(onSubmit)} className=' '>
            <h1 className='mb-10 font-bold text-xl text-[#335383ff]'>
              QR CODE GENERATOR
            </h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="url">
                URL
              </label>
              <input
                id="url"
                type="text"
                {...register('url')}
                placeholder="e.g. https://google.com"
                className="border rounded-md p-2 md:w-[30rem] w-[20rem]"
              />
              {errors.url && <p className="text-red-500 text-xs italic">{errors.url.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-[#335383ff] hover:bg-white text-white hover:text-[#335383ff] font-bold py-2 px-4 rounded-md m-2"
            >
              Generate
            </button>
          </form>
          {qrcode && (
            <>
              <img className="md:ml-[2rem] xl:ml-[40rem] mb-5" src={qrcode} alt="Generated QR Code" />
              <a
                className="bg-[#335383ff] hover:bg-white text-white hover:text-[#335383ff] font-bold py-2 px-4 rounded-md mt-9"
                href={qrcode}
                download="qrcode.png"
              >
                Download Code
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScanCode;
