import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AddTask from '../Pages/AddTask';
import CompletedTasks from '../Pages/CompletedTasks';
import MyTasks from '../Pages/MyTasks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <MyTasks />,
      },
      {
        path: '/my-tasks',
        element: <MyTasks />,
      },
      {
        path: '/add-task',
        element: <AddTask />,
      },
      {
        path: '/completed-tasks',
        element: <CompletedTasks />,
      },
    ],
  },
]);

export default router;
