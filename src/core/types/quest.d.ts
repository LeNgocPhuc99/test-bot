import { RequestStatus } from "./network";

// ********** QUEST INTERFACE ********** //

export type TelegramQuestType = "DAILY" | "GROWTH" | "PARTNER";
export type TelegramQuestRefreshType = "DAILY" | "NONE";

export interface IVerifyQuestStatus {
  id: number | null;
  status: RequestStatus;
}

export interface ITelegramQuestResponse {
  daily_quest: ITelegramQuest[];
  growth_quest: ITelegramQuest[];
  partner_quest: ITelegramQuest[];
}

export interface ITelegramQuest {
  id: number;
  name: string;
  index: number;
  link?: string;
  point: number;
  unique_key: string;
  description: string;
  max_repeated: number;
  type: TelegramQuestType;
  refresh_type: TelegramQuestRefreshType;
}

export interface ITelegramQuestProgress {
  date: string;
  point: number;
  user_id: number;
  ref_code: string;
  ref_count: number;
  ref_point: number;
  quest_done: number[],
  ref_code_used: string;
}

export interface IUserReferralReward {
  invite: number;
  referral_ticket: number;
  reward_info: IReferralReward;
}

export interface IReferralReward {
  total_reward: number;
  total_claim: number;
  details: IReferralRewardDetail[];
}

export interface IReferralRewardDetail {
  rank: number;
  week: number;
  total_ticket: number;
  total_reward: number;
}

export interface IUserQuestRank {
  total_user: number;
  total_ticket: number;
  rank_list: IUserRank[];
  current_rank: IUserRank;
}

export interface IUserRank {
  rank: number;
  address: string;
  tick_amount: number;
}

export interface IVerifyTelegramQuestResponse {
  quest_point: number;
  quest_id: number;
  ref_code: string;
  ref_count: number;
  ref_quest_point: number;
  done_quest: number[]; // List os quest's id
  type: TelegramQuestType;
  success?: boolean;
  message?: string;
}

// ********** LEADERBOARD INTERFACE ********** //

export interface ITelegramUserRank {
  rank: number;
  user_id: number;
  address?: string;
  username: string;
  quest_point: number;
}

export interface ITelegramLeaderboardResponse {
  rank: number;
  user_id: number;
  address: string;
  total_user: number;
  quest_point: number;
  total_quest_point: number;
  leaderboard: ITelegramUserRank[];
}

// ********** ACHIEVEMENT INTERFACE ********** //

export type TelegramRewardType = "QUEST_POINT";

export interface IClaimAchievementRewardStatus {
  achievementId: number | null;
  pathIndex: number | null;
  status: RequestStatus;
}

export interface ITelegramAchievementInfo {
  id: number;
  value: number;
  name: string;
  description: string;
  counter_description: string;
  reward_path: {
    path: IRewardPathInfo[];
  };
  claimed: number[];
  success?: boolean;
  message?: string;
}

export interface ITelegramRewardPathInfo {
  value: number;
  value_text: string;
  reward_amount: number;
  reward_type: TelegramRewardType;
}

export interface IClaimAchievementRewardResponse {
  success: boolean,
  message?: string,
}