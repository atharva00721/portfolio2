"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/views/Home";
import Projects from "../components/views/Projects";
import ProjectDetail from "../components/views/ProjectDetail";
import BlogList from "../components/views/BlogList";
import BlogDetail from "../components/views/BlogDetail";
import { Project, BlogPost, PlaygroundItem } from "../types";
import { AnimatePresence } from "framer-motion";

import { useTheme } from "next-themes";

import Experience from "../components/views/Experience";
import Garden from "../components/views/Garden";
import ExperimentDetail from "../components/views/ExperimentDetail";


export default function Page() {
  const [view, setView] = useState<"home" | "projects" | "project-detail" | "blog" | "blog-detail" | "experience" | "garden" | "garden-detail">("home");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);
  const [activeExperiment, setActiveExperiment] = useState<PlaygroundItem | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleNav = (target: "home" | "projects" | "blog" | "experience" | "garden") => {
    setView(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    setView("project-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBlogClick = (blog: BlogPost) => {
    setActiveBlog(blog);
    setView("blog-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExperimentClick = (experiment: PlaygroundItem) => {
    setActiveExperiment(experiment);
    setView("garden-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const borderClass = isDark ? "border-neutral-800" : "border-neutral-200";
  const mutedText = isDark ? "text-neutral-400" : "text-neutral-500";

  return (
    <div className={`min-h-screen transition-colors duration-300 max-w-4xl mx-auto border-x ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header
        view={view}
        handleNav={handleNav}
        borderClass={borderClass}
        mutedText={mutedText}
      />

      <AnimatePresence mode="wait">
        {view === "home" && (
          <Home
            key="home"
            borderClass={borderClass}
            mutedText={mutedText}
            isDark={isDark}
            handleProjectClick={handleProjectClick}
            handleNav={handleNav}
          />
        )}
        {view === "projects" && (
          <Projects
            key="projects"
            borderClass={borderClass}
            mutedText={mutedText}
            isDark={isDark}
            handleProjectClick={handleProjectClick}
            handleNav={handleNav}
          />
        )}
        {view === "experience" && (
          <Experience
            key="experience"
            borderClass={borderClass}
            mutedText={mutedText}
            handleNav={handleNav}
          />
        )}
        {view === "garden" && (
          <Garden
            key="garden"
            borderClass={borderClass}
            mutedText={mutedText}
            isDark={isDark}
            handleExperimentClick={handleExperimentClick}
            handleNav={handleNav}
          />
        )}
        {view === "project-detail" && activeProject && (
          <ProjectDetail
            key={activeProject.slug}
            project={activeProject}
            borderClass={borderClass}
            mutedText={mutedText}
            isDark={isDark}
            handleNav={() => handleNav("projects")}
          />
        )}
        {view === "blog" && (
          <BlogList
            key="blog"
            borderClass={borderClass}
            mutedText={mutedText}
            handleBlogClick={handleBlogClick}
          />
        )}
        {view === "blog-detail" && activeBlog && (
          <BlogDetail
            key="blog-detail"
            blog={activeBlog}
            borderClass={borderClass}
            mutedText={mutedText}
            isDark={isDark}
            handleBack={() => handleNav("blog")}
          />
        )}
        {view === "garden-detail" && activeExperiment && (
          <ExperimentDetail
            key={`garden-${activeExperiment.id}`}
            experiment={activeExperiment}
            borderClass={borderClass}
            mutedText={mutedText}
            isDark={isDark}
            handleBack={() => handleNav("garden")}
          />
        )}
      </AnimatePresence>

      <Footer borderClass={borderClass} mutedText={mutedText} isDark={isDark} />
    </div>
  );
}
