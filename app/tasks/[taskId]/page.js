import EditForm from '@/components/EditForm';
import { EditTask, getTask } from '@/utils/actions';
import Link from 'next/link';

const SingleTaskPage = async (context) => {
  const params = await context.params;
  const task = await getTask(params.taskId);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};
export default SingleTaskPage;
