"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string | readonly string[];
  location?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  location,
}: ResumeCardProps) => {
  const renderDescription = () => {
    if (!description) return null;
    
    if (Array.isArray(description)) {
      return (
        <ul className="resume-bullet-container work-description">
          {description.map((item, index) => (
            <li
              key={index}
              className="resume-bullet-item"
            >
              <span className="resume-bullet"></span>
              <span 
                className="resume-bullet-text"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ul>
      );
    }
    
    // Fallback for string descriptions
    return (
      <div className="mt-2 text-sm sm:text-base text-muted-foreground work-description">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  };

  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <div className="mb-4">
          <div className="flex items-start justify-between gap-x-4">
            <div className="card-header-content flex-1">
              <div className="company-info-row">
                {href ? (
                  <Link
                    href={href}
                    className="company-link inline-flex items-center justify-center font-semibold leading-none"
                  >
                    {title}
                  </Link>
                ) : (
                  <h3 className="company-link inline-flex items-center justify-center font-semibold leading-none">
                    {title}
                  </h3>
                )}
                {location && (
                  <div className="location-info">
                    <span className="location-pin">📍</span>
                    <span>{location}</span>
                  </div>
                )}
                {badges && (
                  <span className="company-badges">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-sm"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </div>
              {subtitle && <div className="position-title">{subtitle}</div>}
            </div>
            <div className="period-info">
              {period}
            </div>
          </div>
        </div>
        {description && (
          <div className="work-description-container px-6 pb-4 work-description">
            {renderDescription()}
          </div>
        )}
      </div>
    </div>
  );
};
