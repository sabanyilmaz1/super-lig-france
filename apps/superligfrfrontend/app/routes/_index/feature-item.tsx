export const FeatureItem = ({
  Icon,
  title,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}) => (
  <div className="flex flex-col items-center">
    <div className="bg-black p-3 rounded-full mb-3">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-white text-lg font-semibold">{title}</h3>
  </div>
);
