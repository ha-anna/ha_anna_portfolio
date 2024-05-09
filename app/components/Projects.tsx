'use client';
import React from 'react';
import projectData from '../data/projectData';
import { nanoid } from 'nanoid';
import DeferredImage from './DeferredImage';

export default function Projects() {
  const projects = projectData.map((project) => {
    const techStack = project.techStack.map((tech) => {
      return (
        <span
          className='tech'
          key={tech}>
          {tech}
        </span>
      );
    });

    return (
      <div
        className='card'
        key={nanoid()}>
        <DeferredImage
          imageUrl={project.img}
          alt=''
        />
        <div className='card-body'>
          <h3 className='card-title'>{project.title}</h3>
          <div className='tech-stack'>{techStack}</div>
          <p className='card-text'>{project.description}</p>
          <div className='card-buttons'>
            <a
              href={project.repo}
              target='_blank'
              className='btn repo-btn'
              rel='noreferrer'>
              View Repository
            </a>
            <a
              href={project.link}
              target='_blank'
              className='btn live-btn'
              rel='noreferrer'>
              View Live Page
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      aria-labelledby='projects'
      className='projects'>
      <h2 id='projects'>Projects</h2>
      <div className='cards'>{projects}</div>
    </section>
  );
}
