"use client";

import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";

import { shareMealSubmit } from "@/app/lib/actions";
import ImagePicker from "@/components/Ui/imagePicker";

export default function ShareMealForm() {
  const [state, formAction] = useFormState(shareMealSubmit, {
    message: null,
  });

  const { pending } = useFormStatus();

  return (
    <main>
      <form
        action={formAction}
        className="text-orange-50 grid gap-6 uppercase mt-12 xl:px-24 text-sm md:text-lg px-4"
      >
        <div className="grid grid-cols sm:grid-cols-2 grid-rows-1 gap-8">
          <p className="flex flex-col space-y-4 col-span-1">
            <label htmlFor="">your name</label>
            <input
              className="bg-slate-400 bg-opacity-10 rounded-2xl p-4"
              type="text"
              id="name"
              name="name"
              required
            />
          </p>
          <p className="flex flex-col space-y-4">
            <label htmlFor="">your email</label>
            <input
              className="bg-slate-400 bg-opacity-10 rounded-2xl p-4"
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
        </div>
        <p className="flex flex-col space-y-4">
          <label htmlFor="">Title</label>
          <input
            className="bg-slate-400 bg-opacity-10 rounded-2xl p-4"
            type="text"
            id="title"
            name="title"
            required
          />
        </p>
        <p className="flex flex-col space-y-4">
          <label htmlFor="">Short Summary</label>
          <input
            className="bg-slate-400 bg-opacity-10 rounded-2xl p-4"
            type="text"
            id="summary"
            name="summary"
            required
          />
        </p>
        <p className="flex flex-col space-y-4">
          <label htmlFor="">Instructions</label>
          <textarea
            className=" bg-slate-400 bg-opacity-10 rounded-3xl p-4"
            required
            rows="10"
            name="instructions"
            id="instructions"
          ></textarea>
        </p>
        <ImagePicker label="Your Image" name="image" />
        <p className="flex flex-col items-end">
          {state.message && <p>{state.message}</p>}
          <button
            disabled={pending}
            className="hover:translate-y-[-4px] transition duration-300 ease-in-out py-4 px-6 rounded-full text-xl md:text-xl xl:text-3xl font-semibold text-orange-50 bg-gradient-to-r from-orange-600 to-orange-400"
            type="submit"
          >
            {pending ? <p>Submitting...</p> : <p>Share Meal</p>}
          </button>
        </p>
      </form>
    </main>
  );
}
// 5204 1660 6597 6690
