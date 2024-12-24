'use client';

import { createTaskCustom } from '@/utils/actions';
import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item uppercase"
      disabled={pending}
    >
      {pending ? 'Please wait...' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useActionState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      state.message = null;
      return;
    }

    if (state.message === 'success') {
      toast.success('task created');
      state.message = null;
    }
  }, [state.message]);

  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      <div className="join w-full">
        <input
          type="text"
          name="content"
          required
          id=""
          className="input input-bordered join-item w-full"
          placeholder="type here"
        />
      </div>
      <SubmitBtn />
    </form>
  );
};
export default TaskFormCustom;
