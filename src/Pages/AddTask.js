import { Input, Textarea } from '@mantine/core';
import {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillImageFill } from 'react-icons/bs';
import { MdDescription, MdTitle } from 'react-icons/md';
import SmallLoader from '../Components/SmallLoader';

export default function Addtask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTask = (data) => {
    setIsLoading(true);
    console.log(data);
    if (data.image.length) {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);

      fetch(
        'https://api.imgbb.com/1/upload?key=7aed085f6042e182b654fdfe90aa96c9',
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((imageData) => {
          const imageUrl = imageData.data.url;
          setIsLoading(false);
          data.imageUrl = imageUrl;
        });
    } else {
      delete data.image;
    }
  };

  return (
    <section
      id="add-tasks"
      className="container w-[95%] mx-auto lg:flex lg:flex-col lg:h-screen my-4"
    >
      <div>
        <h2 className="text-center text-2xl font-medium">Add A Task</h2>
        <form
          className="mt-4 w-full lg:w-[700px] m-auto space-y-2"
          onSubmit={handleSubmit(handleAddTask)}
        >
          <Input
            placeholder="Task Title"
            icon={<MdTitle />}
            type="text"
            {...register('title', { required: true })}
          />
          <Input
            icon={<BsFillImageFill />}
            {...register('image')}
            type="file"
            accept="image/*"
          />
          <Textarea
            placeholder="Task Description"
            icon={<MdDescription className="-mt-6" />}
            {...register('description', { required: true })}
          />
          <button
            className="btn-primary w-full py-[10px] disabled:bg-gray-600"
            disabled={isLoading}
          >
            {isLoading ? <SmallLoader /> : 'Submit Task'}
          </button>
        </form>
      </div>
    </section>
  );
}
