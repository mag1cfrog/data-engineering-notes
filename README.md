# Data Engineering Notes

A collection of practical insights and lessons learned from real-world data engineering workloads, covering Apache Spark optimization, pipeline architecture, and big data technologies.

## 📖 Read the Blog

Visit the live blog: **[mag1cfrog.github.io/data-engineering-notes](https://mag1cfrog.github.io/data-engineering-notes/)**

This blog documents practical data engineering techniques gained from working with massive datasets in production environments, including:

### Apache Spark Optimization
- **Window Function Performance**: How a simple `ROW_NUMBER()` window function caused 391 GB of disk spilling and 33+ minute execution times
- **Hash vs Sort Aggregation**: Understanding when Spark falls back to expensive sort-based aggregation and how to avoid it
- **Memory Management**: Identifying and fixing disk spilling issues that kill performance
- **Query Profile Analysis**: Reading Databricks query profiles to identify bottlenecks
- **Alternative Approaches**: Using functions like `max_by()` to replace expensive window operations

### Data Pipeline Engineering
- Pipeline design patterns and best practices
- Data quality and monitoring strategies
- Stream processing architectures
- Performance optimization techniques

### Big Data Technologies
- Comparative analysis of data processing frameworks
- Infrastructure and deployment considerations
- Scalability patterns and anti-patterns

## 🎯 Featured Case Study

**From 33 minutes to 12 minutes**: Learn how replacing a window function with `max_by()` eliminated massive sort operations and reduced execution time by 2.7x on a 2.3 billion row dataset.

### Key Topics Covered:
- Analyzing 391 GB disk spill causes
- Understanding Spark's sort-based vs hash-based aggregation
- Optimizing window functions for large datasets
- Memory-efficient alternatives to `ROW_NUMBER()`
- Production tuning for MLB tracking data processing

## 🛠 Technical Stack

This blog is built with:
- ✅ **Astro** - Static site generator
- ✅ **MDX** - Markdown with embedded components  
- ✅ **Databricks** query profiles and performance screenshots
- ✅ **Apache Spark** source code analysis
- ✅ Real production workload examples

## � Contributing

Have your own Spark optimization stories? Contributions are welcome! This blog aims to be a practical resource for the Spark community.

## 🔗 Links

- **Live Blog**: [mag1cfrog.github.io/data-engineering-notes](https://mag1cfrog.github.io/data-engineering-notes/)
- **Astro Documentation**: [docs.astro.build](https://docs.astro.build)
- **Apache Spark**: [spark.apache.org](https://spark.apache.org)
