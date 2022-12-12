for loop 

for(int i = 0; i < n; i++) 

for(Item item : items)


```java
// jdk version 
javap -v test.class | findstr major
```

```java 
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM");
LocalDate date = LocalDate.parse("2022-12", formatter);

// 각 달의 마지막 날
TemporalAdjuster lastDayOfMonth = TemporalAdjusters.lastDayOfMonth();
date = date.with(lastDayOfMonth);

System.out.println(date);  // 2022-12-31
```
