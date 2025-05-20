import { Card, CardContent } from "@/components/ui/card";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
};

export default function SkillCard({
  icon,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <Card className="bg-black/50 border border-gray-800 flex flex-col h-full">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="h-12 w-12 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-400/20 transition-colors">
          {icon}
        </div>

        <h3 className="text-xl font-bold font-space mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
