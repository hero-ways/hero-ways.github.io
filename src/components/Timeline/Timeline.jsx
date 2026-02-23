import React from "react";
import { useTranslation } from "react-i18next";
import "./Timeline.css";
import ReactMarkdown from 'react-markdown';

const Timeline = () => {
  const { t } = useTranslation();
  const projects = t("evidence.projects", { returnObjects: true });

  return (
    <div className="timeline">
      {projects.map((project, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-date">{project.date}</div>
          <div className="timeline-content">
            {project.url ? (
              <h3 className="timeline-title">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
            ) : (
              <h3 className="timeline-title">{project.name}</h3>
            )}

            <div className="timeline-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="timeline-tag">{tag}</span>
              ))}
            </div>
            <p className="timeline-description"><ReactMarkdown>{project.description}</ReactMarkdown></p>

            {project.publications && project.publications.length > 0 && (
              <ul className="timeline-publications">
                <h5>{t("evidence.publications")}</h5>
                {project.publications.map((pub, i) => (
                  <li key={i}>
                    {pub.url ? (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer">
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
