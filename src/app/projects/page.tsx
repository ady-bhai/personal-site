import type { Metadata } from "next";
import WorkQuadrants from "./WorkQuadrants";

export const metadata: Metadata = {
  title: "Work · Ady Mehta",
  description:
    "Generalist work across research, field-building, operations, and fun—Ady Mehta.",
};

export default function ProjectsPage() {
  return (
    <div className="py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Work</h1>

      <WorkQuadrants />
    </div>
  );
}
