import TypingEffect from "./Typingeffect";

const Rhyme = () => {
  return (
    <div className=" p-10 flex flex-col justify-center w-5/12 h-screen">
      <div className="text-3xl text-slate-200">
      <TypingEffect
        text="Trick or treat, smell my feet. Give me something good to eat."
        speed={50}
      />
      </div>
      <section className="flex gap-16 mt-8">
        <button className="btn btn-lg">Trick</button>
        <button className="btn btn-lg">Treat</button>
      </section>
    </div>
  );
};

export default Rhyme;
