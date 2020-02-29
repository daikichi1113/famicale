# DB設計／メインコンテンツ

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|image|img||
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :user_groups
- has_many :groups,  through:  :user_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :user_groups
- has_many :users, through:  :user_groups
- belongs_to :calendar

## user_groups
|Column|Type|Options|
|------|----|-------|
|user-id|integer|null: false, foreign_key: true|
|group-id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## calendars
|Column|Type|Options|
|------|----|-------|

### Association
- belongs_to :group

## messages
|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|image|img||
|user-id|integer|null: false, foreign_key: true|
|group-id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group




# DB設計／サブコンテンツ

## usersテーブル（メインと同じ）
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :games
- has_many :scores

## gamesテーブル
|Column|Type|Options|
|------|----|-------|

### Association
- belongs_to :user
- has_many :scores

## scoresテーブル
|Column|Type|Options|
|------|----|-------|
|user-id|integer|null: false, foreign_key: true|
|game-id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :game