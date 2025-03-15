"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
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
  description?: string;
  location?: string;
  startDate?: Date;
}

const getPeriodTime = (startDate: Date, endDate?: Date): string => {
  const effectiveEndDate = endDate || new Date();
  const diffMs = effectiveEndDate.getTime() - startDate.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const startYear = startDate.getFullYear();
  const endYear = effectiveEndDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endMonth = effectiveEndDate.getMonth();
  const diffMonthsTotal =
    (endYear - startYear) * 12 +
    (endMonth - startMonth) +
    (diffDays >= 1 ? 1 : 0);

  const diffYears = Math.floor(diffMonthsTotal / 12);
  const remainingMonths = diffMonthsTotal % 12;

  let result = "";
  if (diffYears > 0) {
    result += `${diffYears} year${diffYears > 1 ? "s" : ""}`;
  }
  if (remainingMonths > 0) {
    if (result) result += " and ";
    result += `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  }

  return result || (diffDays > 0 ? "1 month" : "Less than a month");
};

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
  startDate,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
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
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm gap-1">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right font-bold flex flex-col gap-1">
                <span>{period}</span>
                <span>{startDate && getPeriodTime(new Date(startDate))}</span>
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs font-bold">{subtitle}</div>
            )}
            {location && <div className="font-sans text-xs">{location}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
