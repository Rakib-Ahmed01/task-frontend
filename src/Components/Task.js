import { Input, Modal, Textarea, Tooltip } from '@mantine/core';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillImageFill, BsPencilFill } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';
import { MdDescription, MdOutlineClose, MdTitle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SmallLoader from '../Components/SmallLoader';
import { AuthContext } from '../contexts/UserContext';
import { queryClient } from '../index';

export default function Task({ task }) {
  const [opened, setOpened] = useState(false);
  const { title, description, createdAt, _id, completed } = task;
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Task Deleted');
          queryClient.invalidateQueries({
            queryKey: ['tasks', 'completed-tasks'],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleComplete = (id) => {
    fetch(`http://localhost:5000/completed-tasks/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Task Completed');
          queryClient.invalidateQueries({
            queryKey: ['tasks', 'completed-tasks'],
          });
          navigate('/completed-tasks');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUncomplete = (id) => {
    fetch(`http://localhost:5000/uncompleted-tasks/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Task Uncompleted');
          queryClient.invalidateQueries({
            queryKey: ['tasks', 'completed-tasks'],
          });
          navigate('/my-tasks');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="border p-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[22px] font-semibold">{title}</h2>
        <p>{new Date(createdAt).toLocaleString()}</p>
      </div>
      {task.imageUrl && (
        <img
          src={task.imageUrl}
          alt={task.title}
          className="rounded-sm my-1 h-52 w-full object-top object-cover"
        />
      )}
      <p>{description}</p>
      <div className="flex gap-2 mt-1">
        <Tooltip label="Update Task">
          <button
            className="btn-primary rounded basis-1/3 flex justify-center text-[16px]
          "
            onClick={() => setOpened(true)}
          >
            <BsPencilFill />
          </button>
        </Tooltip>
        <Tooltip label="Delete Task">
          <button
            className="btn-primary basis-1/3 flex justify-center rounded text-[16px]"
            onClick={() => handleDelete(_id)}
          >
            <AiTwotoneDelete />
          </button>
        </Tooltip>
        {completed ? (
          <Tooltip label="Uncomplete Task">
            <button
              className="btn-primary basis-1/3 flex justify-center rounded text-[16px]"
              onClick={() => handleUncomplete(_id)}
            >
              <MdOutlineClose />
            </button>
          </Tooltip>
        ) : (
          <Tooltip label="Complete Task">
            <button
              className="btn-primary basis-1/3 flex justify-center rounded text-[16px]"
              onClick={() => handleComplete(_id)}
            >
              <GoCheck />
            </button>
          </Tooltip>
        )}
      </div>
      <Modal opened={opened} onClose={() => setOpened(false)} title={title}>
        <form
          className="space-y-2"
          // onSubmit={handleSubmit(handleAddTask)}
        >
          <Input
            placeholder="Task Title"
            icon={<MdTitle />}
            type="text"
            {...register('title', { required: true })}
            defaultValue={title}
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
            defaultValue={description}
          />
          <button
            className="btn-primary w-full py-[10px] disabled:bg-gray-600"
            disabled={isLoading}
          >
            {isLoading ? <SmallLoader /> : 'Submit Task'}
          </button>
        </form>
      </Modal>
    </div>
  );
}
