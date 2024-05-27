import React, { FormEvent } from "react";

const AddForm: React.FC = () => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  }
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm">
          Enter some text
        </label>
        <input type="text" name="name" className="border border-black rounded p-1" />
      </div>
      <button
        type="submit"
        className="shadow-lg hover:shadow-xl hover:bg-slate-300 transition-all bg-slate-200 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default AddForm;
