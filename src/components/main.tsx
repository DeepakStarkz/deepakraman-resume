import React from 'react';
import { EDUCATION, EXPERIENCE, SKILLS, PROJECTS } from '../constants/contents';
import SubHeading from './subheading';

export const Content: React.FC = () => {
  return (
    <main className="p-4 content-center max-lg:p-4 lg:px-20">
      <Summary />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="mt-6">
      <SubHeading title="Skills"></SubHeading>
      <ul className="list-disc pl-5">
        {SKILLS.map((skill, index) => (
          <li key={index} className="text-gray-700 ">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

const Education: React.FC = () => {
  return (
    <section className="mt-6">
      <SubHeading title="Education"></SubHeading>
      {EDUCATION.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="text-lg font-semibold">{edu.degree}</h3>
          <p className="text-gray-600">
            {edu.institution} <span className="text-gray-500">{edu.year}</span>
          </p>
        </div>
      ))}
    </section>
  );
};

const Summary: React.FC = () => {
  return (
    <section className="mt-6">
      <SubHeading title="Summary"></SubHeading>
      <p className="text-gray-700">
        Senior Frontend Developer with 5+ years of experience building scalable,
        high‑performance web applications using React and Next.js (App Router &
        Pages Router). Strong expertise in headless architecture, content‑driven
        platforms, and high‑traffic e‑commerce checkouts serving 1M+ users.
        Proven at improving Core Web Vitals, SEO, and conversion, integrating
        GraphQL/REST APIs, and collaborating across design, backend, and product
        teams in Agile environments. Eligible for UK Skilled Worker visa
        sponsorship.
      </p>
    </section>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="mt-6">
      <SubHeading title="Experience"></SubHeading>
      {EXPERIENCE.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{exp.title}</h3>
          <p className="text-gray-600">
            {exp.company} , <span className="text-gray-500">{exp.period}</span>
          </p>
          <ul className="list-disc pl-5 mt-2">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-700">
                {resp}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="mt-6">
      <SubHeading title="Websites, Portfolio and links"></SubHeading>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View link
            </a>
          )}
        </div>
      ))}
    </section>
  );
};
