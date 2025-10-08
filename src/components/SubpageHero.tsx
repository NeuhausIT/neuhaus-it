import { ReactNode } from "react";
import ActionButtonMenu from "@/components/ActionButtonMenu";

interface SubpageHeroProps {
  title: string;
  description: string;
  icon?: ReactNode;
  children?: ReactNode;
  showActionButton?: boolean;
}

const SubpageHero = ({ title, description, icon, children, showActionButton = true }: SubpageHeroProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-4xl text-center">
        {icon && (
          <div className="flex justify-center mb-6">
            {icon}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        {(showActionButton || children) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {showActionButton && <ActionButtonMenu size="lg" />}
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default SubpageHero;
