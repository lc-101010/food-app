const About: React.FC = () => {
  const social_items: string[] = ['GitHub', 'Facebook', 'Twitter'];
  return (
    <div className="flex flex-col items-center bg-lc-mantle w-full">
      <div className="flex flex-row justify-between my-5 p-2 pt-5 w-2/3">
        <div className="flex flex-col">
          <p>Address</p>
        </div>
        <div className="flex flex-col">
          <p>Social</p>
          <div className="flex flex-col gap-1">
            {social_items.map((item) => (
              <p
                key={item}
                className="font-light hover:font-medium text-lc-mauve text-sm hover:underline hover:cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default About;
