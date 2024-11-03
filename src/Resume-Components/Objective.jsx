export default function Objective() {
    return (
      <>
        {/* Objective */}
        <div>
          {/* Section 2 */}
          <h1 className="font-bold text-[2rem] w-full text-center">
            Objective
          </h1>
          <div className="flex flex-col gap-2 w-full max-w-[400px] border-[1.5px] p-2 border-blue-400 rounded-md shadow-md">
            <div className="w-full max-w-sm mx-auto my-0">
              <h2 className="font-bold text-slate-500 flex items-center gap-2 my-3">
                Choose your goal
              </h2>
              <div className="relative">
                <select
                  name="goals"
                  id="goals"
                  className="block appearance-none w-full bg-white border border-gray-300 py-3 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-indigo-500"
                >
                  <option value="goal-1">
                    I am looking for an opportunity where I can utilize my
                    skills while continuing to grow in my career.
                  </option>
                  <option value="goal-2">
                    Seeking a challenging position that allows me to contribute
                    to team success.
                  </option>
                  <option value="goal-3">
                    Aiming for a role where I can develop professionally and
                    enhance my skill set.
                  </option>
                  <option value="goal-4">
                    Looking for a position that values growth, learning, and
                    contribution to impactful projects.
                  </option>
                  <option value="goal-5">
                    Interested in a career where innovation and teamwork drive
                    progress.
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 7l4 4 4-4h-8z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full max-w-[400px]">
                <h2 className="font-bold text-slate-500 mt-4">
                  or write your goal in below input
                </h2>
                <label
                  htmlFor="goal"
                  className="font-bold text-slate-500 flex items-center gap-2 mt-3"
                >
                  <span className="fa-solid fa-bullseye"></span>
                  <span>
                    Enter your objective(<span>Goal</span>)
                  </span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your goal"
                  id="goal"
                  className=" border border-gray-300 text-gray-700 py-2 px-3 mb-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};