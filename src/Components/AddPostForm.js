import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postAdded } from '../features/posts/postsSlice';

const AddPostForm = () => {
    const dispatch = useDispatch()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(postAdded(data))
        console.log(data);
    }

    return (
        <section className='flex justify-center items-center py-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-3xl text-center'>Post a Post</h3>
                <div className="form-control w-full max-w-md mb-3">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input {...register("title", { required: true })} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt">{errors.title && <span>Title is required</span>}</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-md mb-3">
                    <label className="label">
                        <span className="label-text">Content</span>
                    </label>
                    <input {...register("body", { required: true })} type="text" placeholder="Content" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt">{errors.body && <span>Content is required</span>}</span>
                    </label>
                </div>

                {/* <div className='mt-3'> */}
                <button type="submit" className="btn btn-wide">Save Post</button>
                {/* </div> */}
            </form>
        </section>
    );
};

export default AddPostForm;