---
layout: default
title: "First Lesson: Partition vs Broadcast"
date: 2025-07-01
---

## First Lesson: Partition vs Broadcast

When joining a large 10 GB DataFrame with a small 200 MB lookup table, I discovered that:

- Using a **broadcast join** with `spark.conf.set("spark.sql.autoBroadcastJoinThreshold", "300MB")` dropped shuffle write from 8 GB to 500 MB.
- Conversely, relying on default partitioned joins caused redundant shuffles across executors.

<aside class="callout">
💡 **Tip:** Always tune `spark.sql.shuffle.partitions = executors * cores_per_executor` after switching join strategies.
</aside>