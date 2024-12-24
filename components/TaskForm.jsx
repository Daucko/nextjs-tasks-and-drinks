import { createTask } from '@/utils/actions';

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          name="content"
          required
          id=""
          className="input input-bordered join-item w-full"
          placeholder="type here"
        />
        <button type="submit" className="btn btn-primary join-item uppercase">
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
