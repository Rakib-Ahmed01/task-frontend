import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../Components/Loader';
import Task from '../Components/Task';

export default function CompletedTasks() {
  const { isLoading, data: tasks } = useQuery(['completed-tasks'], async () => {
    const data = await axios('http://localhost:5000/completed-tasks');
    return data.data;
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section
      id="my-tasks"
      className="container w-[95%] mx-auto my-4 min-h-screen"
    >
      <div>
        <h2 className="text-center text-2xl font-medium">Completed Tasks</h2>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => {
            return <Task key={task._id} task={task} />;
          })}
        </div>
      </div>
    </section>
  );
}
