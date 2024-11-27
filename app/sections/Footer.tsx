import List from "../components/List";

export default function Footer() {
  return (
    <footer className="w-[100%] px-7 py-[72px] lg:py-[92px] grid gap-5 ">
      <div className="w-[100%] grid gap-5 md:grid-cols-3 md:place-items-center ">
        <List />
        <List />
        <List />
          </div>
          
          <div className="flex flex-col gap-5 md:flex-row">
              <h3 className="text-[16px] font-semibold text-gray-300 ">Logo</h3>
              <p>Designed and developed by Yassine Saindou</p>
          </div>
    </footer>
  );
}
