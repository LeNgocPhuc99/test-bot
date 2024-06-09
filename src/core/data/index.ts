import { ITelegramAchievementInfo, ITelegramLeaderboardResponse, ITelegramQuestProgress, ITelegramQuestResponse } from "../types/quest";

export const questList: ITelegramQuestResponse = {
    "daily_quest": [
        {
            "type": "DAILY",
            "refresh_type": "DAILY",
            "id": 9,
            "name": "Check-in",
            "description": "Have a nice day with MemeTD!!!",
            "point": 10,
            "max_repeated": 1,
            "unique_key": "daily_checkin",
            "index": 0
        },
        {
            "type": "DAILY",
            "refresh_type": "DAILY",
            "id": 8,
            "name": "Visit Group",
            "description": "Visit our community group to catch up with latest news from MemeTD",
            "link": "https://t.me/MemeTDgame",
            "point": 10,
            "max_repeated": 1,
            "unique_key": "daily_visit_group",
            "index": 1
        },
        {
            "type": "DAILY",
            "refresh_type": "DAILY",
            "id": 7,
            "name": "Daily invite",
            "description": "Invite your friends to have more fun together!!!",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "daily_invite",
            "index": 2
        },
        {
            "type": "DAILY",
            "refresh_type": "DAILY",
            "id": 22,
            "name": "Retweet",
            "description": "Retweet our tweet for daily reward",
            "link": "https://x.com/MemeTD_official/status/1783161960827334988",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "daily_retweet",
            "index": 3
        }
    ],
    "growth_quest": [
        {
            "type": "GROWTH",
            "refresh_type": "NONE",
            "id": 23,
            "name": "Subscribe Announcement",
            "description": "Subscribe our announcement channel to catch up with latest news from MemeTD",
            "link": "https://t.me/memetd_official",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "growth_join_ann",
            "index": -1
        },
        {
            "type": "GROWTH",
            "refresh_type": "NONE",
            "id": 10,
            "name": "Premium User",
            "description": "Tobe Telegram premium user to get more reward from MemeTD",
            "link": "https://t.me/premium",
            "point": 350,
            "max_repeated": 1,
            "unique_key": "growth_premium_user",
            "index": 0
        },
        {
            "type": "GROWTH",
            "refresh_type": "NONE",
            "id": 11,
            "name": "Join Community Group",
            "description": "Join our community group to catch up with latest news from MemeTD",
            "link": "https://t.me/MemeTDgame",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "growth_join_community_group",
            "index": 1
        },
        {
            "type": "GROWTH",
            "refresh_type": "NONE",
            "id": 18,
            "name": "Join Discord Channel",
            "description": "Join our Discord channel to catch up with latest news from MemeTD",
            "link": "https://discord.gg/eaym8DQg99",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "growth_join_discord_chanel",
            "index": 2
        },
        {
            "type": "GROWTH",
            "refresh_type": "NONE",
            "id": 13,
            "name": "Follow us on Twitter",
            "description": "Follow us on Twitter to catch up with latest news from MemeTD",
            "link": "https://twitter.com/MemeTD_official",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "growth_follow_twitter",
            "index": 3
        },
        {
            "type": "GROWTH",
            "refresh_type": "NONE",
            "id": 14,
            "name": "Retweet our post",
            "description": "Help us to retweet our Twitter post",
            "link": "https://twitter.com/MemeTD_official/status/1774668681047593070",
            "point": 10,
            "max_repeated": 1,
            "unique_key": "growth_retweet_post",
            "index": 4
        }
    ],
    "partner_quest": [
        {
            "type": "PARTNER",
            "refresh_type": "NONE",
            "id": 15,
            "name": "PopLaunch Telegram",
            "description": "Telegram",
            "link": "https://t.me/PopLaunch",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "partner_join_telegram_poplaunch",
            "index": 90
        },
        {
            "type": "PARTNER",
            "refresh_type": "NONE",
            "id": 16,
            "name": "PopLaunch Twitter",
            "description": "Twitter",
            "link": "https://twitter.com/pop_launch",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "partner_follow_twitter_poplaunch",
            "index": 91
        },
        {
            "type": "PARTNER",
            "refresh_type": "NONE",
            "id": 17,
            "name": "xBRC20 Twitter",
            "description": "Twitter",
            "link": "https://twitter.com/xbrc20_bridge",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "partner_follow_twitter_xbrc20",
            "index": 92
        },
        {
            "type": "PARTNER",
            "refresh_type": "NONE",
            "id": 19,
            "name": "xBRC20 Telegram",
            "description": "Telegram",
            "link": "https://t.me/xbrc20Dapp",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "partner_join_telegram_xbrc20",
            "index": 93
        },
        {
            "type": "PARTNER",
            "refresh_type": "NONE",
            "id": 20,
            "name": "xBRC20 Discord",
            "description": "Discord",
            "link": "https://discord.gg/aNU8Wc9X3B",
            "point": 20,
            "max_repeated": 1,
            "unique_key": "partner_join_discord",
            "index": 94
        }
    ]
}

export const questProgress: ITelegramQuestProgress = {
    "user_id": 15345,
    "date": "08-06-2024",
    "quest_done": [
        13,
        16,
        18,
        14,
        17,
        20
    ],
    "point": 840,
    "ref_point": 0,
    "ref_count": 0,
    "ref_code": "memetd-b5a5e8i4h0",
    "ref_code_used": "memetd-h1h7b6d6h0"
}

export const achievementInfos: ITelegramAchievementInfo[] = [
    {
        "id": 1,
        "name": "Total check-in Day",
        "description": "Check in to get reward",
        "counter_description": "Days",
        "reward_path": {
            "path": [
                {
                    "value": 1.0,
                    "value_text": "Day 1",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 50
                },
                {
                    "value": 2.0,
                    "value_text": "Day 2",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 80
                },
                {
                    "value": 3.0,
                    "value_text": "Day 3",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 100
                },
                {
                    "value": 7.0,
                    "value_text": "Day 7",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 150
                },
                {
                    "value": 14.0,
                    "value_text": "Day 14",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 200
                },
                {
                    "value": 30.0,
                    "value_text": "Day 30",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 300
                },
                {
                    "value": 60.0,
                    "value_text": "Day 60",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 400
                },
                {
                    "value": 90.0,
                    "value_text": "Day 90",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 600
                },
                {
                    "value": 120.0,
                    "value_text": "Day 120",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 1000
                }
            ]
        },
        "value": 6.0,
        "claimed": [
            0,
            1,
            2
        ]
    },
    {
        "id": 2,
        "name": "Total invitations",
        "description": "Invite your friends to get reward",
        "counter_description": "Cumulative invitations",
        "reward_path": {
            "path": [
                {
                    "value": 1.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC23</span> 1+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 50
                },
                {
                    "value": 2.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC23</span> 2+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 80
                },
                {
                    "value": 5.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC23</span> 5+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 100
                },
                {
                    "value": 10.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC23</span> 10+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 150
                },
                {
                    "value": 20.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC23</span> 20+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 200
                },
                {
                    "value": 50.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC23</span> 50+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 300
                },
                {
                    "value": 100.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC23</span> 100+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 400
                }
            ]
        },
        "value": 0.0,
        "claimed": []
    },
    {
        "id": 3,
        "name": "Premium user invitations",
        "description": "Invite Telegram premium users to get more reward",
        "counter_description": "Cumulative invitations",
        "reward_path": {
            "path": [
                {
                    "value": 1.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC25</span> 1+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 200
                },
                {
                    "value": 2.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC25</span> 2+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 300
                },
                {
                    "value": 5.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC25</span> 5+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 500
                },
                {
                    "value": 10.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC25</span> 10+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 800
                },
                {
                    "value": 20.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC25</span> 20+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 1000
                },
                {
                    "value": 50.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC25</span> 50+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 2000
                },
                {
                    "value": 100.0,
                    "value_text": "<span style=\"font-size:2rem\">\uD83D\uDC25</span> 100+",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 3000
                }
            ]
        },
        "value": 0.0,
        "claimed": []
    },
    {
        "id": 4,
        "name": "Cumulative purchase",
        "description": "Cumulative purchase",
        "counter_description": "Cumulative",
        "reward_path": {
            "path": [
                {
                    "value": 0.01,
                    "value_text": "First purchase",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 100
                },
                {
                    "value": 10.0,
                    "value_text": "10",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 200
                },
                {
                    "value": 20.0,
                    "value_text": "20",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 300
                },
                {
                    "value": 50.0,
                    "value_text": "50",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 500
                },
                {
                    "value": 100.0,
                    "value_text": "100",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 800
                },
                {
                    "value": 200.0,
                    "value_text": "200",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 1000
                },
                {
                    "value": 500.0,
                    "value_text": "500",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 2000
                },
                {
                    "value": 1000.0,
                    "value_text": "1000",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 3000
                },
                {
                    "value": 2000.0,
                    "value_text": "2000",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 5000
                },
                {
                    "value": 5000.0,
                    "value_text": "5000",
                    "reward_type": "QUEST_POINT",
                    "reward_amount": 10000
                }
            ]
        },
        "value": 12.21,
        "claimed": [
            0,
            1
        ]
    }
]

export const leaderboardInfo: ITelegramLeaderboardResponse = {
    "user_id": 15345,
    "address": "null",
    "quest_point": 840,
    "rank": 2,
    "total_user": 22,
    "total_quest_point": 3720,
    "leaderboard": [
        {
            "user_id": 15344,
            "username": "Beta",
            "quest_point": 900,
            "rank": 1
        },
        {
            "user_id": 15345,
            "username": "Phuc",
            "quest_point": 840,
            "rank": 2
        },
        {
            "user_id": 15346,
            "username": "Tris",
            "quest_point": 700,
            "rank": 3
        },
        {
            "user_id": 15351,
            "username": "Vinh",
            "quest_point": 560,
            "rank": 4
        },
        {
            "user_id": 15414,
            "username": "Ying",
            "quest_point": 500,
            "rank": 5
        },
        {
            "user_id": 15426,
            "username": "Vinh",
            "quest_point": 160,
            "rank": 6
        },
        {
            "user_id": 15428,
            "username": "Shibad",
            "quest_point": 60,
            "rank": 7
        },
        {
            "user_id": 15443,
            "username": "Ares",
            "quest_point": 0,
            "rank": 8
        },
        {
            "user_id": 15442,
            "username": "Shibad",
            "quest_point": 0,
            "rank": 9
        },
        {
            "user_id": 15429,
            "username": "Tran",
            "quest_point": 0,
            "rank": 10
        },
        {
            "user_id": 15427,
            "username": "Hoang",
            "quest_point": 0,
            "rank": 11
        },
        {
            "user_id": 15425,
            "username": "Vinh",
            "quest_point": 0,
            "rank": 12
        },
        {
            "user_id": 15413,
            "username": "Vinh",
            "quest_point": 0,
            "rank": 13
        },
        {
            "user_id": 15358,
            "username": "Beta",
            "quest_point": 0,
            "rank": 14
        },
        {
            "user_id": 15357,
            "username": "Beta",
            "quest_point": 0,
            "rank": 15
        },
        {
            "user_id": 15356,
            "username": "Hoang",
            "quest_point": 0,
            "rank": 16
        },
        {
            "user_id": 15354,
            "username": "Beta",
            "quest_point": 0,
            "rank": 17
        },
        {
            "user_id": 15353,
            "username": "TA",
            "quest_point": 0,
            "rank": 18
        },
        {
            "user_id": 15352,
            "username": "meme",
            "quest_point": 0,
            "rank": 19
        },
        {
            "user_id": 15350,
            "username": "Kaka",
            "quest_point": 0,
            "rank": 20
        },
        {
            "user_id": 15348,
            "username": "StormPhan",
            "quest_point": 0,
            "rank": 21
        },
        {
            "user_id": 15347,
            "username": "Hieu",
            "quest_point": 0,
            "rank": 22
        }
    ]
}
