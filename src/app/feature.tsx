"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Collect Leads Offline",
    children:
      "Create list for events, collect leads offline. Scan business cards and QR codes to collect leads.",
  },
  {
    icon: HeartIcon,
    title: "Follow Up with Leads",
    children:
      "Set notifications and reminders to follow up with your leads. Keep track of your leads and deals in one place.",
  },
  {
    icon: LockClosedIcon,
    title: "Explore events",
    children:
      "Find events and meetups near you. Get notified when new events are added.",
  },
  {
    icon: LightBulbIcon,
    title: "Sync with CRM",
    children:
      "Sync your leads and deals with your CRM. Enrich your CRM with leads collected offline.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          LeadsQuik Features
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Events to Deals on the Go
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Our app is here to help you collect leads offline. Find events, create
          lists, collect leads, and sync your data to your CRM. Set
          notifications and reminders to follow up with your leads.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
