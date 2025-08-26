import NavMenu from "@/components/navbar";



export default function Home() {
  return (
    <div className="">
      <NavMenu/>
      <section className="h-[500px] w-full bg-slate-200 flex justify-center align-middle text-[100px] font-bold">
        <h1>Welcome to our site</h1>
      </section>
    </div>
  );
}