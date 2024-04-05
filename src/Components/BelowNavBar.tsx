function BelowNavBarLargeScreens() {
  return (
    <div
      style={{
        backgroundColor: `#F2F2F2`,
      }}
      className="flex p-4 h-12"
    >
      <div className="max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 hidden lg:flex">
        {/* {All Catagories button} */}
        <div
          className=""
          style={{
            backgroundColor: `#00B207`,
          }}
        >
          <button className="h-full rounded">All Catagories</button>
        </div>
      </div>
    </div>
  );
}
export { BelowNavBarLargeScreens };
