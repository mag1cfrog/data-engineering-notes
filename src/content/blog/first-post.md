---
title: "First Lesson: Partition vs Broadcast"
pubDate: 2025-06-13T12:00:00-08:00
tags:
  - spark
  - optimization
description: "How switching from partitioned joins to broadcast joins reduced shuffle writes from 8GB to 500MB"
draft: true
---

## Intro

I work for an MLB team, and we process massive amounts of baseball tracking data every day. Recently, we had a Spark job on Databricks that needed to join an enormous table (player tracking records with coordinates for each frame) with a dimensional table (position number to player uid mapping), then perform deduplication using a window function.


### The Deduplication Challenge

The core logic involved a window function to handle duplicate records (some psedudo SQL):

```sql
WITH ranked AS (
  SELECT 
    tracking.*,
    lineup.fielder_id,
    lineup.position_alpha,
    ROW_NUMBER() OVER (
      PARTITION BY game_id, pitch_uid, position_num, event_time
      ORDER BY processed_year DESC, processed_month DESC, processed_day DESC
    ) AS rn
  FROM hawkeye_tracking tracking
  JOIN hawkeye_lineup lineup ON (...)
)
SELECT * EXCEPT (rn)
FROM ranked 
WHERE rn = 1
```


