import { Button } from "../components";

const Subscribe = () => {
  return <section>
    <h3>SignUp for
      <span> Updates </span>& Newsletter
    </h3>
    <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-slate-500 rounded-full">
      <input type="text" placeholder="subscribe@nike.com" className="input"/>
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button label="Sign Up" fullWidth />
      </div>
    </div>
  </section>;
};

export default Subscribe;
