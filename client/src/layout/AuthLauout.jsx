"use client";

const AuthLayout = ({ children }) => {
  return (
    <div className="border--2 border-[green] w-full h-screen grid lg:grid-cols-2 grid-cols-1 overflow-hidden relative">
      <div className="border--2 border-[red] w-[10rem] h-[8rem] absolute z-50 left-[50%] rounded-xl translate-x-[-70%] bg-[#ffffffbe] blur-[0.5px] lg:flex justify-center items-center p-3 hidden">
        <img
          src="/images/logo.png"
          alt="logo"
          className=""
        />
      </div>

      <div className="border--2 border-[blue] max-lg:hidden flex justify-center items-center relative">
        {/* <img
          src="/images/logo.png"
          alt="logo"
          className="absolute top-10 left-20"
        /> */}
        <img
          src="/images/authBg.png"
          alt="authBg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`border--2 border-[blue] h-screen flex justify-center sm:items-center p-2 overflow-hidden overflow-y-auto`}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
