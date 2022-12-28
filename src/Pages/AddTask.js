import { Input, Textarea } from '@mantine/core';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillImageFill } from 'react-icons/bs';
import { MdDescription, MdTitle } from 'react-icons/md';

export default function Addtask() {
  const fileInputRef = useRef();
  const [filename, setFilename] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddTask = (data) => {
    console.log(data);
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
            {...register('title')}
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
            {...register('description')}
          />
          <button className="btn-primary w-full py-[10px]">Submit Task</button>
        </form>
      </div>
    </section>
  );
}
