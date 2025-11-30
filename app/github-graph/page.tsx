import ContributionGraph from "@/components/ContributionGraph";
import { getContributionData } from "@/lib/github";
import * as motion from "framer-motion/client";

export default async function Page() {
  const calendar = await getContributionData("atharva00721");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl"
      >
        <div className="p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-white">GitHub Activity</h1>
          <ContributionGraph calendar={calendar} />
        </div>
      </motion.div>
    </div>
  );
}
