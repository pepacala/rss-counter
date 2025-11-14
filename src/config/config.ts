import { ReactNode } from "react";
import { makeDays, makeMatsLvl7, makeMega } from "../utils/utils";

export type ConfigType = {
  form: {
    name: string;
    label: string;
    blocks: string[];
    roundedFunction?: RoundedFunctionType;
    priority?: number;
  }[];
};

export type RoundedFunctionType = (number: number) => ReactNode;

export type InputBlockType = { name: string; value: number };

export type ResourceFormData = {
  name: string;
  blocks: InputBlockType[];
}[];

export type DisplayData = {
  name: string;
  label: string;
  value: number;
  roundedFunction?: RoundedFunctionType;
  priority?: number;
}[];

export type ResourceChange = (
  value: number,
  name: string,
  blockName: string
) => void;

export type ResourceFormInputChange = (value: number, name: string) => void;

export const multipliers = [
  { name: "10", multiplier: 10 },
  { name: "20", multiplier: 20 },
  { name: "50", multiplier: 50 },
  { name: "100", multiplier: 100 },
  { name: "200", multiplier: 100 },
  { name: "500", multiplier: 500 },
  { name: "1K", multiplier: 1000 },
  { name: "xK", multiplier: 1000 },
  { name: "2K", multiplier: 2000 },
  { name: "5K", multiplier: 5000 },
  { name: "10K", multiplier: 10000 },
  { name: "50K", multiplier: 50000 },
  { name: "100K", multiplier: 100000 },
  { name: "200K", multiplier: 200000 },
  { name: "500K", multiplier: 500000 },
  { name: "1M", multiplier: 1000000 },
  { name: "sM", multiplier: 1000000 },
  { name: "xM", multiplier: 1000000 },
  { name: "XM", multiplier: 1000000 },
  { name: "4M", multiplier: 4000000 },
  { name: "5M", multiplier: 5000000 },

  { name: "5m", multiplier: 5 },
  { name: "10m", multiplier: 10 },
  { name: "15m", multiplier: 15 },
  { name: "30m", multiplier: 30 },
  { name: "60m", multiplier: 60 },
  { name: "3h", multiplier: 3 * 60 },
  { name: "8h", multiplier: 8 * 60 },
  { name: "12h", multiplier: 12 * 60 },
  { name: "24h", multiplier: 24 * 60 },
  { name: "3d", multiplier: 3 * 24 * 60 },
  { name: "7d", multiplier: 7 * 24 * 60 },
  { name: "30d", multiplier: 30 * 24 * 60 },

  { name: "l1", multiplier: 1 },
  { name: "l2", multiplier: 3 },
  { name: "l3", multiplier: Math.pow(3, 2) },
  { name: "l4", multiplier: Math.pow(3, 3) },
  { name: "l5", multiplier: Math.pow(3, 4) },
  { name: "l6", multiplier: Math.pow(3, 5) },
  { name: "l7", multiplier: Math.pow(3, 6) },
];

const blocks = {
  rss: ["5K", "10K", "50K", "100K", "500K", "1M", "5M", "sM", "xM", "XM"],
  speed: [
    "5m",
    "10m",
    "15m",
    "30m",
    "60m",
    "3h",
    "8h",
    "12h",
    "24h",
    "3d",
    "7d",
    "30d",
  ],
  gems: ["10", "20", "50", "100", "200", "500", "1K", "2K", "5K", "xK"],
  gold: ["1K", "5K", "10K", "50K", "100K", "200K", "500K", "1M", "4M", "xM"],
  xpg: ["100", "500", "1K", "2K", "5K", "10K", "20K"],
  xpb: ["500", "1K", "2K", "5K", "10K"],
  mats: ["l1", "l2", "l3", "l4", "l5", "l6", "l7"],
};

// make sure there is no duplicity in name
export const config: ConfigType = {
  form: [
    {
      name: "food",
      label: "Food",
      blocks: blocks.rss,
      roundedFunction: makeMega,
      priority: 1,
    },
    {
      name: "lumber",
      label: "Lumber",
      blocks: blocks.rss,
      roundedFunction: makeMega,
      priority: 1,
    },
    {
      name: "stone",
      label: "Stone",
      blocks: blocks.rss,
      roundedFunction: makeMega,
      priority: 1,
    },
    {
      name: "ore",
      label: "Ore",
      blocks: blocks.rss,
      roundedFunction: makeMega,
      priority: 1,
    },
    {
      name: "gems",
      label: "Gems",
      blocks: blocks.gems,
      roundedFunction: makeMega,
      priority: 1,
    },
    {
      name: "gold",
      label: "Gold",
      blocks: blocks.gold,
      roundedFunction: makeMega,
      priority: 1,
    },
    {
      name: "speedCommon",
      label: "Speed Common",
      blocks: blocks.speed,
      roundedFunction: makeDays,
    },
    {
      name: "speedConstr",
      label: "Speed Constr",
      blocks: blocks.speed,
      roundedFunction: makeDays,
    },
    {
      name: "speedRes",
      label: "Speed Res",
      blocks: blocks.speed,
      roundedFunction: makeDays,
    },
    {
      name: "generalXP",
      label: "General XP",
      blocks: blocks.xpg,
      roundedFunction: makeMega,
    },
    {
      name: "beastXP",
      label: "Beast XP",
      blocks: blocks.xpb,
      roundedFunction: makeMega,
    },
    {
      name: "Test1",
      label: "Test1",
      blocks: blocks.xpb,
    },
    {
      name: "crystal",
      label: "Crystal",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "bstone",
      label: "B Stone",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "agate",
      label: "Agate",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "pearl",
      label: "Pearl",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "meteor",
      label: "Meteor",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "iron",
      label: "Iron",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "bronze",
      label: "Bronze",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "wood",
      label: "Wood",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "bone",
      label: "Bone",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "leather",
      label: "Leather",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "feather",
      label: "Feather",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
    {
      name: "scale",
      label: "Scale",
      blocks: blocks.mats,
      roundedFunction: makeMatsLvl7,
    },
  ],
};
