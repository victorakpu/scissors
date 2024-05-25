
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface UrlFormProps {
    onSubmit: (url: string, customAlias?: string) => void;
}

interface UrlFormInputs {
    url: string;
    customAlias?: string;
}

const schema = yup.object().shape({
    url: yup.string().url('Enter a valid URL').required('URL is required'),
    customAlias: yup.string().optional(),
});

const UrlForm: React.FC<UrlFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<UrlFormInputs>({
        resolver: yupResolver(schema),
    });

    const handleFormSubmit: SubmitHandler<UrlFormInputs> = (data) => {
        onSubmit(data.url, data.customAlias);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                    URL
                </label>
                <input
                    type="url"
                    id="url"
                    {...register('url')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.url && <p className="text-red-500 text-xs italic">{errors.url.message}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customAlias">
                    Custom Alias (optional)
                </label>
                <input
                    type="text"
                    id="customAlias"
                    {...register('customAlias')}
                    className="shadow appearance-none border rounded w-[20rem] md:w-[30rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button type="submit"  className="bg-[#335383ff] hover:bg-white text-white hover:text-[#335383ff] font-bold py-2 px-4 rounded-md m-2">
                Shorten
            </button>
        </form>
    );
};

export default UrlForm;
