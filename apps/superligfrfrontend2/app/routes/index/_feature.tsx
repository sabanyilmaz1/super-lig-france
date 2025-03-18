export const Feature = ({
  Icon,
  title,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}) => (
  <div className="flex flex-col items-center">
    <div className="p-3 mb-3 bg-black rounded-full">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
  </div>
);
