const SocialIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-12 w-12 rounded-full flex justify-center items-center bg-orange-500 text-white hover:bg-gray-800 hover:cursor-pointer">
      {children}
    </div>
  );
};

export default SocialIcon;
