interface BgBannertypes {
  url: string;
  children?: React.ReactNode;
}

const BgBanner = ({ url, children }: BgBannertypes) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={`min-h-[350px] h-auto md:min-h-[500px] bg-no-repeat bg-cover bg-fixed bg-[top_center] flex items-center`}
    >
      {children}
    </div>
  );
};

export default BgBanner;
